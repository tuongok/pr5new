import { getCookie } from "../components/helpers/cookie.js";
import {del, get,post} from "../untils/index.js"

export const getanswer=async()=>{
    const usserId=getCookie("id");  
    const res=await get(`answers?userId=${usserId}`);
    return res;
}   ;

export const getanswerr=async(id)=>{
    const res=await get(`answers/${id}`);
    return res;
}   ;
