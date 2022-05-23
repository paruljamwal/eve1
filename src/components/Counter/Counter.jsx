import React from "react";
import styles from "./counter.module.css";
import {useState} from 'react'
const Counter = () => {
  const [counter,setCounter]=useState(1)
  // sample value to be replaced
  let count = 0;
  const handeladd=(e)=>{
     setCounter(counter+e)
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button  data-cy="task-counter-increment-button" onClick={()=>handeladd(+1)} >+</button>
      <span data-cy="task-counter-value">{counter}</span>
      <button disabled={counter===0} data-cy="task-counter-decrement-button" onClick={()=>handeladd(-1)}>-</button>
    </div>
  );
};

export default Counter;
