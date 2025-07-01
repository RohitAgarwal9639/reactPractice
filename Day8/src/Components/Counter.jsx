import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counter
