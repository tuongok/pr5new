import { setCookie } from "../../components/helpers/cookie";
import { checklogin } from "../../services/loginservice";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { login } from "../../actions/login";
function Login(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const email = e.target[0].value.trim();
        const password = e.target[1].value.trim();
        if (!email || !password) {
            alert("Vui lòng nhập đầy đủ email và mật khẩu.");
            return; 
        }
       const res= await checklogin(email,password);
       if(res.length>0){
        
        setCookie("id",res[0].id,1);
        setCookie("fullName",res[0].fullName,1);
        setCookie("email",res[0].email,1);
        setCookie("token",res[0].token,1);
        dispatch(login(true));
        navigate("/");
       }
       else{
        alert("Sai tài khoản hoặc mật khẩu !");
       }
    }
    return(
        <>
        <form className="login" onSubmit={handleSubmit}>
            <h2> Đăng nhập Quiz</h2>
            <div>
                <input type="email" placeholder="Nhập email "/>
            </div>
            <div>
                <input type="password" placeholder="Nhập mật khẩu  "/> 
            </div>
            <button type="submit"> Đăng nhập  </button>
        </form>
        </>
    )
}
export default Login;