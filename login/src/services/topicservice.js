import { get } from "../untils";

export const gettopic=async()=>{
    const result=await get(`topics`);
    return result;
}   ;
export const gettopicso=async(id)=>{
    const result=await get(`topics/${id}`);
    return result;
}   ;