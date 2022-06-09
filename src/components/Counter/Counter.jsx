import React, { useEffect, useState } from "react";
import styles from "./counter.module.css";

const Counter = ({counter}) => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-testid` key value pair

  const [count,setCount] = useState(0)

  const incdc = (c)=>{
    let temp = count+c;

    if(temp < 0)
    {
      setCount(0)
    }
    else{
      setCount(temp)
    }
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
