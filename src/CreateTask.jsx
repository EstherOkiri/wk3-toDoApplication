import App from "./App";
import { useState } from "react";

function Add() {
    const[taskId, setTaskId] = useState("");
    const[taskName, setTaskName] = useState("");
    const[tasks, setTasks] = useState("");
    const [taskStatus, setTaskStatus] = useState(false);

    // const handleTaskId = (e) => {
    //     setTaskId(e.target.value);
    // }
    // const handleTaskName = (e) => {
    //     setTaskName(e.target.value);
    // }

    const handleAddTask = (e) =>{
        e.preventDefault();
        const tasks = {taskId, taskName, taskStatus};

        fetch('http://localhost:8000/tasks',{
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(tasks)
        }).then(() => {
            console.log('new task added')
        })
        
    }
    
    return(

        <>
            <div className='newTaskForm'>
            <form>
                <label htmlFor="id">Task ID</label>
                <input type="number" name="task-id" placeholder="task id" required value={taskId} 
                onChange = {(e)=> {setTaskId(e.target.value)}}></input>
                <label htmlFor="Task Name"> Type Name of Task : </label>
                <input type="text" name="Task Name" id="TaskName" placeholder='Task name...' required value={taskName}
                onChange={(e) => {setTaskName(e.target.value)}} />
                <div className='addContainer'> <br /> <br />
                <button className='addTaskbtn'onClick={handleAddTask}> Add New Task </button>
            </div>
            </form>

    </div>
        
        </>
    )
}
export default Add