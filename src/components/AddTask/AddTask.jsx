import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({setTodos,addTodo}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [newTask,setNewTask] = useState()
  // const [todoList, setTodoList] = useState([])
  // console.log(todoList)

  // const addTodo = ()=>{
  //   setTodoList([...todoList,todo])
  // }

 

  // useEffect(()=>{
  //   gettodos()
  // },[])

  // useEffect(()=>{
  //   setTodos(todoList)
  // },[todoList])
  // const gettodos = async()=>{
  //   let todos = await fetch("http://localhost:8080/todos").then((d)=>d.json())

  //   setTodoList(todos)
  // }

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
