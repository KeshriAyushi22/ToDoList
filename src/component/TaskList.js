import React ,{useContext}from 'react'
import {TaskListContext} from '../context/TaskListContext'
import Task from "./Task"
import "../css/App.css"

const TaskList = () => {
    const [tasks,setTask] = useContext(TaskListContext);
    return (
       <ul className="list">
           {tasks.map((task)=>
            <Task  task={task} key={task.id}/>
           )}
       </ul>
    )
}

export default TaskList