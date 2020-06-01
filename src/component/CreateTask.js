import React from 'react'
import "../css/App.css"

 const CreateTask = () => {
    const  theme=()=> {
        
        var element = document.getElementById("container");
        element.classList.toggle("container-dark-mode");

        //app-wrapper
        var element1 = document.getElementById("app-wrapper");
        element1.classList.toggle("app-wrapper-dark-mode");
     }
    return (
        <form  className="form">
            <input type="text" 
            className="task-input"
            placeholder="Add Task.."
            required />
            <div className="buttons">
                <button type="submit" 
                className="btn add-clear-task-btn"
                >
                    Add Task
                </button>
                <button  
                className="btn add-clear-task-btn">
                    Clear
                </button>
            </div>
        </form>
    )
}

export default CreateTask