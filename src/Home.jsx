import App from "./App"; 
import Add from "./CreateTask";
import { useState, useEffect} from "react";

function Home(){
    const[tasks, setTasks] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8000/tasks')
        .then((res)=>{
            return res.json();
        }).then((data) =>{
            console.log(data);
            setTasks(data);
        })
        
    },[] )

    return(
        <>
            <div className="home">
                <h1>To Do Application</h1>
                <h3>All Your Tasks</h3>
            </div>
            <div>
                {tasks.map((task =>(
                    <div className="tasksDisplay" key={task.id}>
                        <p>Task Name: {task.taskName}</p>
                        <p>Status: {task.taskStatus}</p>
                        <p>Description: {task.taskDescription}</p>
                    </div>

                ))
                    
                )}
            </div>
        </>
    )
}
export default Home