import React, { createContext,useState, Children } from 'react'

export const TaskListContext = createContext();

export const TaskListProvider =(props)=>{
  const [tasks,setTask]=  useState([
        {title:'Read the book',id:'1'},
        {title:'Wash the Car',id:'2'},
        {title:'Do Coding',id:'3'}
    ])

    

    return(
      <TaskListContext.Provider value={[tasks,setTask]}>
          {props.children}
      </TaskListContext.Provider>
    )
}

export default TaskListContext