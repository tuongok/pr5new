import { get } from "../untils";

export const getquestion1=async()=>{
    const result=await get(`topics`);
    return result;
}   ;
export const getquestion=async(id)=>{
    const result=await get(`questions?topicId=${id}`);
    return result;
}   ;