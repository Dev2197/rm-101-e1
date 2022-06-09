import React, { useEffect, useState } from "react";
import nextId from "react-id-generator";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [todos,setTodos] = useState([])
  

  // console.log(todos)

  const deleteTask = (index)=>{
    
    const newTodos = todos.filter((e,id)=>{ return e.id !== index})
    setTodos(newTodos)
  }

  const toggleTask = (index)=>{
    const todo = todos.map((e,id)=>{
      if(e.id === index)
      {
        e.done = !e.done
      }

      return e;
    })
    
    setTodos([...todo])
  }

  
  const changeCounter = (id,value)=>{

    const todo = todos.map((e)=>{
      if(e.id === id)
      {
        e.count = e.count+value;
        if(e.count < 0)
        {
          e.count = 0;
        }
      }

      return e;
    })

    setTodos([...todo])
  }

  
  

 

  const addTodo = (newTodo)=>{
    let count = 0;
    
    for(let i=0; i<todos.length; i++)
    {
      if(todos[i].text === newTodo)
      {
        count++;
        break;
      }
    }
    // console.log(count)
    if(count === 0)
    {
      let newTask = {
        id:nextId(),
        text:newTodo,
        done:false,
        count:1
        }
    
        setTodos([...todos,newTask])
    }
  }

  const gettodos = async()=>{
    let tododata = await fetch("http://localhost:8080/todos").then((d)=>d.json())

    setTodos(tododata)
  }

  useEffect(()=>{
      gettodos()
    },[])

    
      
            


  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader todos={todos}/>
      {/* Add Task */}
      <AddTask setTodos={setTodos} addTodo={addTodo}/>

      <hr />
      {/* Tasks */}
      <Tasks todos={todos} deleteTask={deleteTask} toggleTask={toggleTask} changeCounter={changeCounter}/>
    </div>
  );
};

export default TaskApp;
