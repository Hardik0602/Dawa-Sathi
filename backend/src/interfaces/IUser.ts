export interface IUser extends Document{
    name:string,
    phone:string,
    email:string,
    age:number,
    password:string,
    address:string,
    otp:string,
    isVerified:boolean,
}