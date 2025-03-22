import { randomtoken } from "../../components/helpers/genaratetoken";
import { checkregister, register } from "../../services/loginservice";
import { useNavigate } from "react-router-dom";
function Register(){
    
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const name=e.target[0].value;
       const email=e.target[1].value;
       const password=e.target[2].value;
       const res= await checkregister("email",email);
       if(res.length>0){
        alert("email da ton tai");
       }
       else{
        const option={
            fullName:name,
            email:email,
            password:password,
            token:randomtoken()
        }
        const result=await register(option);
        if(result){
            navigate("/login");
        }
        else{
            alert("Đăng kí thất bại");
        }
       }
      
    }
    return(
        <>
        <form className="register" onSubmit={handleSubmit}>
            <h2> Đăng kí tài khoản</h2>
            <div>
                <input type="text" placeholder="Nhập tên "/>
            </div>
            <div>
                <input type="email" placeholder="Nhập email "/>
            </div>
            <div>
                <input type="password" placeholder="Nhập mật khẩu"/> 
            </div>
            <button type="submit"> Đăng kí </button>
        </form>
        </>
    )
}
export default Register;