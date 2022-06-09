import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({setTodos,addTodo}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [newTask,setNewTask] = useState()

  const handleChange = (e)=>{
    setNewTask(e.target.value)
  }

  
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" name="text" onChange={handleChange} placeholder="Add Task..."/>
      <button data-testid="add-task-button" onClick={()=>{addTodo(newTask)}} className={styles.button}>+</button>
    </div>
  );
};

export default AddTask;
