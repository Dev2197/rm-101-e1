import React, { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({tasks,deleteTask,toggleTask}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [tasksList,setTasksList] = useState([])

  useEffect(()=>{
    setTasksList(tasks)
  },[tasks])
  // console.log(tasksList)
  return (
    // <li data-testid="task" className={styles.task}>
    //   <input type="checkbox" data-testid="task-checkbox" />
    //   <div data-testid="task-text"></div>
    //   {/* Counter here */}
    //   <button data-testid="task-remove-button"></button>
    // </li>

    <>
    {tasksList.map((e,id)=>(
      <li data-testid="task" className={styles.task} key={id}>
      <input type="checkbox" data-testid="task-checkbox" checked={e.done}
      onClick={()=>{toggleTask(id)}} />
      <div data-testid="task-text" style={e.done ? {textDecoration:"line-through"}:{textDecoration:"none"}}>{e.text}</div>
      {/* Counter here */}
      <Counter counter={e.count}/>
      <button data-testid="task-remove-button" onClick={()=>{deleteTask(id)}}>X</button>
    </li>
    ))}
    </>
    
  );
};

export default Task;
