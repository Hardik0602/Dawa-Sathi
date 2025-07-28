import { IUser } from '../interfaces/IUser';
import {userDetails} from '../models/userAuth.model'

export const findbyphone=async (phone:string) :Promise<any> => {
    try{
   return await userDetails.findOne({phone});
    }
    catch(error){
       const err=error as Error;
        console.log(err,'err in findbyPhone repo');
        throw err;
    }
}

export const createUser=async (data:IUser) :Promise<any>=> {
    try{
    return await userDetails.create(data);
    }
    catch(error){
        const err=error as Error;
        console.log(err,'error in createuserRepository');
        throw err;
    }
}

export const updateUser=async(phone:string, update:Partial<IUser>) :Promise<any>=>{
    try{
    return await userDetails.findOneAndUpdate(
        {phone},
         update,
        {new:true}
        );
    }
    catch(error){
        const err=error as Error;
        console.log(err,'err in updateUser repository');
        throw err;
    }
}
