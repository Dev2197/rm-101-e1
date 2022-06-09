import React, { useEffect, useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({setTodos}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [todo,setTodo] = useState({
    text:"",
    done:false,
    count:1
  })
  const [todoList, setTodoList] = useState([])
  // console.log(todoList)

  const addTodo = ()=>{
    setTodoList([...todoList,todo])
  }

 

  useEffect(()=>{
    gettodos()
  },[])

  useEffect(()=>{
    setTodos(todoList)
  },[todoList])
  const gettodos = async()=>{
    let todos = await fetch("http://localhost:8080/todos").then((d)=>d.json())

    setTodoList(todos)
  }

  const handleChange = (e)=>{
    const {name,value} = e.target

    setTodo({
      ...todo,
      [name]:value
    })
  }

  
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" name="text" onChange={handleChange} placeholder="Add Task..."/>
      <button data-testid="add-task-button" onClick={addTodo} className={styles.button}>+</button>
    </div>
  );
};

export default AddTask;
