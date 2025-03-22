import { NavLink, Outlet } from "react-router-dom";
import './style.scss'
import { getCookie } from "../../components/helpers/cookie";
import { useSelector } from "react-redux";
function Layout() {
    const token = getCookie("token");
    console.log(token);
    const islogin=useSelector(state=>state.loginreducer);
    console.log(islogin);
    return (
        <>
            <div className="body">
            <div className="layout__default">
                <header className="layout__header">
                    <div className="layout__logo"><NavLink to="/">Quiz</NavLink></div>
                    <div className="layout__menu">
                        <ul>
                            
                            {token && (<>
                                <li>
                                <NavLink  to="/">Trang chủ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/topic">Chủ đề</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/answers">Trả lời</NavLink>
                                </li>
                            </>)}
                        </ul>
                    </div>
                    <div className="layout__login">
                        {token ? (<>
                            <NavLink to="/logout">Đăng xuất </NavLink>
                        </>) : (<>
                            <NavLink to="/login">Đăng nhập</NavLink>
                            <NavLink to="/register">Đăng kí </NavLink>
                        </>)}
                    </div>
                </header>
                <main className="layout__main">
                    <Outlet context={{ token }} />
                </main>
                <footer className="layout__footer">
                     @Copyright by Dang Anh Tuongg
                </footer>
            </div>
            </div>
        </>
    )
}
export default Layout;