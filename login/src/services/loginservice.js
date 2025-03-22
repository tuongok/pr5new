import { del, deletee, get, path, post } from "../untils";


export const checklogin=async(email,password)=>{
    const result=await get(`users?email=${email}&password=${password}`);
    return result;
}   ;
export const checkregister=async(key,value)=>{
    const result=await get(`users?${key}=${value}`);
    return result;
}
export const register=async(option)=>{
    const result =await post("users",option);
       return result;
}
