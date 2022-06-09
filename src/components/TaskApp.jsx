import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [todos,setTodos] = useState([])

  // console.log(todos)

  const deleteTask = (index)=>{
    // console.log(text)
    const newTodos = todos.filter((e,id)=>{ return id !== index})
    setTodos(newTodos)
  }

  const toggleTask = (index)=>{
    const todo = todos.map((e,id)=>{
      if(id === index)
      {
        e.done = !e.done
      }

      return e;
    })
    
    setTodos([...todo])
  }
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader todos={todos}/>
      {/* Add Task */}
      <AddTask setTodos={setTodos} />

      <hr />
      {/* Tasks */}
      <Tasks todos={todos} deleteTask={deleteTask} toggleTask={toggleTask}/>
    </div>
  );
};

export default TaskApp;
