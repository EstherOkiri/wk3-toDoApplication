import App from "./App";
import { useState, useEffect } from "react";

function Add() {
    const[taskName, setTaskName] = useState("");
    const[tasks, setTasks] = useState("");
    

  
    const handleTaskName = (e) => {
        setTaskName(e.target.value);
    }

    const handleAddTask = (e) =>{
        e.preventDefault();
        const tasks = {taskName};

        fetch('http://localhost:8000/tasks',{
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(tasks)
        }).then((data) => {
            
        })
        
    }
    
    return(

        <>
            <div className='newTaskForm'>
            <form>
                <label htmlFor="Task Name"> Type Name of Task : </label>
                <input type="text" name="Task Name" id="TaskName" placeholder='Task name...' required value={taskName}
                onChange={(e) => {setTaskName(e.target.value)}} />
                <label htmlFor="id">Task Description</label>
                <div className='addContainer'> <br /> <br />
                <button className='addTaskbtn'onClick={handleAddTask}> Add New Task </button>
            </div>
            </form>

    </div>
        
        </>
    )
}
export default Add