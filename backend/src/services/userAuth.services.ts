import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendOTPToPhone } from '../utils/twilioClient';
import { createUser, findbyphone, updateUser } from '../repositories/userAuth.repositories';
import { IUser } from '../interfaces/IUser';

//SIGNUP

export const userSignupservice = async (data: IUser): Promise<any> => {
    try {
        const existingUser = await findbyphone(data.phone);

        if (existingUser) throw new Error('User already exists');

        const hashedPass = await bcrypt.hash(data.password, 10);

        const otp = Math.floor(1000 + Math.random() * 9000).toString();

        const newuser = await createUser({ ...data, password: hashedPass, otp, isVerified: false });

        await sendOTPToPhone(data.phone, otp);

        return newuser;
    }
    catch (error) {
        const err = error as Error;
        console.log(err, 'err in userSignUpservice');
        throw err;
    }
}

//LOGIN

export const userLoginService = async (phone: string, password: string): Promise<any> => {
    try {
        const user = await findbyphone(phone);
        if (!user) throw new Error('No user found');
        if (!user || !user.isVerified) throw new Error("User OTP not verified");
        if (!user || typeof user.password !== "string") throw new Error("Invalid user or password");

        const match = await bcrypt.compare(password, user.password);
        if (!match) throw new Error("Invalid Credentials");

        const token = jwt.sign(
            { _id: user._id, phone }, process.env.SECRET_KEY!, { expiresIn: "1h" }
        );
        return {
            token,
            message: 'Login Successful'
        };
    }
    catch (error) {
        const err = error as Error;
        console.log(err, 'err in userLoginservice');
        throw err;
    }
}

//Verify OTP

export const verifyOTPService = async (phone: string, otp: string): Promise<any> => {
    try {
        const user = await findbyphone(phone);
        if (!user || !user.otp) {
            throw new Error('OTP not found or Expired');
        }
        if (user.otp !== otp) {
            throw new Error('Invalid OTP');
        }

        await updateUser(phone, { isVerified: true, otp: "" });

        const token = jwt.sign(
            { _id: user._id }, process.env.SECRET_KEY!, { expiresIn: "1h" }
        )

        return {
            msg: 'OTP Verified Successfully',
            token
        };
    }
    catch (error) {
        const err = error as Error;
        console.log(err, 'err in userVerifyUpservice');
        throw err;
    }

}

