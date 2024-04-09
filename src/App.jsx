import { useState } from 'react'
import './App.css'
import Add from './CreateTask'
import Home from './Home'
import Navbar from './Navbar'


function App() {

  
  return (
    <>
    <Navbar/>
    <Home/>
    <br />
    <h2>Add New Task</h2>
    <Add/>        
    



     
    </>
  )
}

export default App
