import { NavLink, useOutletContext } from "react-router-dom";

function Home(){
    const { token } = useOutletContext();
    return(
        <>
        {token&&(<div className="home__title">
            <div className="home__desc">Chúc mừng ngài đang nhập thành công ! </div>
            <NavLink to="/topic">Các chủ đề</NavLink>
            <NavLink to="/answers">Bài đã làm</NavLink>
            <hr></hr>
        </div>)}
       <div className="home">
       <div className="home__text">Trang web kiểm tra trực tuyến lập trình frontend là một nền tảng trực tuyến cho phép các lập trình viên frontend thực hiện các bài kiểm tra, câu đố, đánh giá và đo lường kiến ​​thức của họ trong lĩnh vực lập trình frontend.</div>
       <div className="home__text1">Đối với các lập trình viên Frontend, trang web đố trực tuyến cung cấp các bài kiểm tra để giúp họ cải thiện kiến ​​thức và kỹ năng của họ về công nghệ lập trình và các công cụ như HTML, CSS, JavaScript, Bootstrap, Ant Design, React, Sass ....</div>
       </div>
        </>
    )
}
export default Home;