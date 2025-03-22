import { parsePath, useNavigate, useParams } from "react-router-dom";
import { gettopicso } from "../../services/topicservice";
import { useEffect, useState } from "react";
import { getquestion } from "../../services/questionservice";
import { getCookie } from "../../components/helpers/cookie";
import { createanswer } from "../../services/quizservice";
function Quiz() {
    const params = useParams();
    const [topic, setTopic] = useState([]);
    const [question, setquestion] = useState([]);
    const navigate=useNavigate();
        useEffect(() => {
        const fetchTopic = async () => {
            const result = await gettopicso(params.id);
            setTopic(result);
        }
        fetchTopic();
    }, [])
    useEffect(() => {
        const fetchTopic = async () => {
            const result = await getquestion(params.id);
            setquestion(result);
            
        }
        fetchTopic();
    }, [])
    const handlesubmit=async(e)=>{
        e.preventDefault();
        let selectedanswers=[];
        for(let i=0;i<e.target.elements.length;i++){
            if(e.target.elements[i].checked){
                const name=e.target.elements[i].name;
                const value=e.target.elements[i].value;
            
            selectedanswers.push({
                questionId:parseInt(name),
                answer:parseInt(value)
            })}
            
        }
        
        let options={
            userId:parseInt(getCookie("id")),
            topicId:parseInt(params.id),
            answers:selectedanswers
        };
        const response=await createanswer(options);
        if(response){
            navigate(`/result/${response.id}`)
        }

    }
    return (
        <>
            <h2>
            Câu hỏi chủ đề :  {topic.name}</h2>
            <div className="quiz" >
                <form onSubmit={handlesubmit}>
                    {question.map((item, index) => (
                        <div key={item.id} className="quiz__item">
                            <h4>Câu {index + 1}:{item.question}</h4>
                            {item.answers.map((itemm, indexx) => (
                                <div className="quiz__answers" key={indexx}>
                                    <input type="radio" value={indexx} name={item.id} id={`quiz-${item.id}-${indexx}`} />
                                    <label htmlFor={`quiz-${item.id}-${indexx}`} >{itemm}</label>
                                </div>
                            ))}

                        </div>
                    ))}
                    <button type="submit">Nộp bài</button>
                </form>
            </div>
        </>
    )
}
export default Quiz;