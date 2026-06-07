import React from 'react'
import { useState } from 'react';
const Count = () => {
    const [count, setCount] = useState(0);

  return (
    <>
    <strong>
    Counter App
    </strong>
    <br></br>
{/*  Button disable and Hide logic */}
      <section id="center">
       <label> Increement Button</label>
        <button
       className={count === 0 ? "hidden" : ""}
       disabled={count==0}
       onClick={() => setCount((count) => count - 1)}>&nbsp; -</button> 
<span> 
  <br></br>
</span>
       <label> Decreement Button</label>

        <button
          className="border-amber-300"
          onClick={() => setCount((count) => count + 1)}>&nbsp;+ </button>
      </section>

      <p>Count is {count}</p>
          {/* <input/> */}
          <br></br>
       </>

  )
}

export default Count