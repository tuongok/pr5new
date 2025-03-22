import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { gettopic } from '../../services/topicservice';
import { GiTopPaw } from 'react-icons/gi';
import { getCookie } from '../../components/helpers/cookie';
function Topic(){
    const [topics, setTopics] = useState([]);
    const token = getCookie("token");
    useEffect(()=>{
        const fetchapi=async()=>{
            const result=await gettopic();
            setTopics(result);
        };
        fetchapi();
        
    },[])
    return(
        <>
        
        <h1>Danh sách các chủ đề  </h1>
        {topics.length>0 && (
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên chủ đề</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {topics.map((item)=>(
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><Link to={"/quiz/"+item.id} > Làm bài </Link>  </td>
                </tr>
                ))}
            </tbody>
        </table>
        )}
        </>
    )
}
export default Topic;