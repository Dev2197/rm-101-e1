import React, { useEffect, useState } from "react";
import styles from "./counter.module.css";

const Counter = ({counter,taskid,changeCounter}) => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-testid` key value pair

  const [count,setCount] = useState()

  const incdc = (c)=>{
    changeCounter(taskid,c)
  }

  useEffect(()=>{
    setCount(counter)
  },[counter])
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={()=>incdc(1)}>+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" onClick={()=>incdc(-1)}>-</button>
    </div>
  );
};

export default Counter;
