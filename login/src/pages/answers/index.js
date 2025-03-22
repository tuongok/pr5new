import { useEffect, useState } from "react";
import { gettopic } from "../../services/topicservice";
import { getanswer } from "../../services/answerservice";
import { Link } from "react-router-dom";

function Answers(){
    const [dataanswer, setdataanswer] = useState([]);
    useEffect(() => {
        const fetchapi = async () => {
            const topic = await gettopic();
            const answer = await getanswer();
            console.log(answer);
            console.log(topic);
            let result = [];
            for(let i=0;i<answer.length;i++){
               result.push({
                
                ...topic.find(item=>item.id==answer[i].topicId),
                ...answer[i]
               }) 
        };
        setdataanswer(result.reverse());
        };
        fetchapi();
    },[])
    console.log(dataanswer);
    return(
        <>
        <h1>Các bàii đã làm xong  </h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên chủ đề</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {dataanswer.map((item)=>(
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><Link to={"/result/"+item.id} >XXem chi tiết</Link>  </td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default Answers;