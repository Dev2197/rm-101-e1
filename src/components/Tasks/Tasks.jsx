import React, { useEffect, useState } from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({todos,deleteTask,toggleTask}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [tasks,setTasks]= useState([])

  useEffect(()=>{
    setTasks(todos)
  },[todos])

  
  // console(todolist)
  return (
    <>
      {/* <ul data-testid="tasks" className={styles.tasks}> */}
        {/* Task List */}
        
      {/* </ul> */}
      {/* <div data-testid="tasks-empty" className={styles.empty}> */}
        {/* Show when No Tasks are present */}
      {/* </div> */}

      {tasks.length > 0 ? 
      <ul data-testid="tasks" className={styles.tasks}>
      {/* Task List */}
      <Task  tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>
      
    </ul> :
    <div data-testid="tasks-empty" className={styles.empty}>
    {/* Show when No Tasks are present */}
    <img style={{width:"50px"}} src="https://rct-101-e1.herokuapp.com/static/media/empty.b0a6b41cd4748982c3c1d1c455e77a6f.svg" alt="" />
    <h4>Empty List</h4>
    <p>Add a new task above</p>
    </div>
      }

      
    </>
  );
};

export default Tasks;
