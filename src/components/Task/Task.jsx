import React, { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({task,deleteTask,toggleTask,changeCounter}) => {
  // NOTE: do not delete `data-testid` key value pair
  // const [tasksList,setTasksList] = useState()
  // console.log(tasksList)
  const [counter,setCounter] = useState()

  useEffect(()=>{
    setCounter(task.count)
  },[task.count])

  
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" onClick={()=>{toggleTask(task.id)}}  defaultChecked={task.done}/>
      <div data-testid="task-text" style={task.done ? {textDecoration:"line-through"}:{textDecoration:"none"}}>{task.text}</div>
      {/* Counter here */}
      <Counter counter={counter}  changeCounter={changeCounter} taskid={task.id}/>
      <button data-testid="task-remove-button" onClick={()=>{deleteTask(task.id)}}>X</button>
    </li>

    // <>
    // {tasksList.map((e,id)=>(
    //   <li data-testid="task" className={styles.task} key={id}>
    //   <input type="checkbox" data-testid="task-checkbox" checked={e.done}
    //   onClick={()=>{toggleTask(id)}} />
    //   <div data-testid="task-text" style={e.done ? {textDecoration:"line-through"}:{textDecoration:"none"}}>{e.text}</div>
    //   {/* Counter here */}
    //   <Counter counter={e.count}/>
    //   <button data-testid="task-remove-button" onClick={()=>{deleteTask(id)}}>X</button>
    // </li>
    // ))}
    // </>
    
  );
};

export default Task;
