import React, { useEffect, useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({todos}) => {
  // sample values to be replaced
  let totalTask = todos.length;
  const [unCompletedTask,setUncompletedTask] = useState(0);

  useEffect(()=>{
    let count = 0;

    for(let i=0; i<todos.length; i++)
    {
      if(todos[i].done == false)
      {
        count++;
      }
    }

    setUncompletedTask(count)
  },[todos])

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h2>TODO LIST</h2>
      You have
      <b data-testid="header-remaining-task"> {unCompletedTask}</b> of 
      <b data-testid="header-total-task"> {totalTask}</b> tasks remaining
    </div>
  );
};

export default TaskHeader;
