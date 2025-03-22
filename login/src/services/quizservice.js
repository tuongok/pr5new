import { post } from "../untils";

export const createanswer=async(option)=>{
    const result =await post("answers",option);
    return result;
}