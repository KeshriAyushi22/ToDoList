import React, { createContext,useState, Children, useEffect } from 'react'
import uuid from 'react-uuid'
export const TaskListContext = createContext();

export const TaskListProvider =(props)=>{
  const initialState =JSON.parse(localStorage.getItem('tasks'))||[]
  
  const [tasks,setTask]=  useState(initialState);

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])

    const addTask =(title) =>{
        setTask([...tasks,{title, id:uuid()}])
    }

    const removeTask = id=>{
      setTask(tasks.filter(item=>item.id!==id))
    }

    const clearTask=()=>{
      setTask([]);
    }

    const [editItem,setEditItem] =useState(null)
    
    const findItem = (id)=>{
     const item= tasks.find(task=>task.id===id)
     setEditItem(item)  //old data
    }

    
    const editTask=(title,id)=>{
      const newTask= tasks.map(task=>task.id===id?{title,id}:task);
      //true return update title
      setTask(newTask)
      setEditItem(null)
    }
    

    return(
      <TaskListContext.Provider value={{tasks,
      addTask, removeTask,clearTask,findItem,editTask,editItem}}>
          {props.children}
      </TaskListContext.Provider>
    )
}

export default TaskListContext