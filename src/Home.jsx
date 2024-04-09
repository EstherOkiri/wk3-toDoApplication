import App from "./App"; 
import Add from "./CreateTask";
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
        fetch('http://localhost:3000/tasks' + tasks.id, {
            method: 'DELETE',
            headers: {"Content-Type" : "application/json"}
        }).then((response) =>{
            if(!response.ok){
                throw new Error('Something went wrong')
            }
            return response.json()
        }).then((data) =>{
            setTasks(data)
        }).catch((e) =>{
            console.log(e)
        })
       
    }
        

    return (
        <>
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