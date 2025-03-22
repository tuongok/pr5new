import {useNavigate} from "react-router-dom";
import { deleteAllCookies } from "../../components/helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/login";
function Logout() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    deleteAllCookies();
    useEffect(() => {
        
        dispatch(login(false));
        navigate("/login");
        
    },[])
    
    return (
        <>
            <></>
        </>
    );
}
export default Logout;    