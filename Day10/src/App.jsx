import { useState,useEffect } from "react"
import Example from "./Components/Example";
const App=()=>{
  const [value,setValue]=useState(0);
  useEffect(()=>{
    console.log("call useEffect");
    document.title=`Increment ${value}`
  },[]);
  return (
    <main>
      <h2>{value}</h2>
      <button onClick={(e)=>setValue(value+1)}>Increment</button>

      <Example />
    </main>
    
  )
}

export default App