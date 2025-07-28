import { Request,Response } from "express";
import {userSignupservice,userLoginService,verifyOTPService} from '../services/userAuth.services';

//@desc    Register User
//@routes POST /api/signup
//@access Public

export const userSignup=async (
    req:Request,
    res:Response
    ) :Promise<any> => {

    try{

        const {phone,password,confirmpassword}=req.body;
        if(!phone || !password || !confirmpassword || phone.length!=10) return res.status(400).json({msg:"Kindly fill all the fields"});
        if(password!=confirmpassword) return res.status(400).json({msg:"Passwords do not not match"});

       await userSignupservice(req.body);
        return res.status(202).json({
            msg:'OTP sent for verification',
    })
}
    catch(error){
        const err=error as Error;
        console.log(err);
        return res.status(500).json({msg:err.message || 'Signup failed'});
    }
}


//@desc   Verify User
//@routes POST /api/verifyotp
//@access Public

export const verifyOTP=async (req:Request,res:Response) :Promise<any>=> {
    try{
        let {phone,otp}=req.body;
        if(!phone || !otp ){
            return res.status(400).json({msg:'Valid Phone and Otp are required'});
        }

        const result=await verifyOTPService(phone,otp);
        res.json(result);
        }
    catch(error){
        const err=error as Error;
        console.log(err, "error in verify OTP controller ");
        return res.status(500).json({ msg: err.message || 'Verification failed' });
    }
}


//@desc   Login User
//@routes POST /api/login
//@access Public

export const userLogin=async (req:Request,res:Response) :Promise<any>=> {
    try{
        let {phone,password}=req.body;
        if(!phone || !password){
            return res.status(400).json({msg:'Kindly Enter a Valid Phone no and Password'});
        }

        const user=await userLoginService(phone,password);
        res.json(user);
    }
    catch(error){
        const err=error as Error;
        console.log(err,"Error in userLogin Controller");
        return res.status(500).json({msg:err.message || 'Login Failed'});
    }
}
