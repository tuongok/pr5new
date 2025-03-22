import Layout from "../layout/layoutdefault";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Private from "../components/privaterouter";
import Answers from "../pages/answers";
import Quiz from "../pages/quiz";
import Result from "../pages/result";
import Topic from "../pages/topic";
import Logout from "../pages/logout";
import "./style.css"
export const routes=[
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                path:"/",
                element:<Home />,
            },
            {
                path:"login",
                element:<Login />,
            },
            {
                path:"register",
                element:<Register />,
            },
            {
                path:"logout",
                element:<Logout />,
            },
            {
                
                element:<Private />,
                children:[
                    {
                        path:"answers",
                        element:<Answers/>
                    },
                    {
                        path:"quiz/:id",
                        element:<Quiz />,
                    },
                    {
                        path:"result/:id",
                        element:<Result />,
                    },
                    {
                        path:"topic",
                        element:<Topic />,
                    },
                ]
            }
        ]
    }
]
