import App from "./App"; 
import Add from "./CreateTask";
import Delete from "./DeleteTask";
import { useState, useEffect} from "react";

function Home(){
    const[tasks, setTasks] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3000/tasks')
        .then((res)=>{
            return res.json();
        }).then((data) =>{
            console.log(data);
            setTasks(data);
        })
        
    },[] )
    const handleDelete = () => {
        fetch('http://localhost:3000/tasks/' + tasks.id, {
            method: 'DELETE'
        }).then(()=>{
            //redirect to home page
            
            
        })

    }

    return(
        <>
            <div className="home">
                <h1>To Do Application</h1>
                <h3>All Your Tasks</h3>
            </div>
            <div>
                {tasks.map((task =>(
                    <div className="tasksDisplay" key={task.id}>
                        <h2>Task Name: {task.taskName}</h2>
                        <p>Description: {task.taskDescription}</p>
                        <p>Status: {task.taskStatus}</p>
                        <button className="delClassBtn" onClick={handleDelete}>Delete</button>
                    </div>
                    

                ))
                    
                )}
            </div>
        </>
    )
}
export default Home