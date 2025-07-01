import { useState } from "react"
import Example from "./Components/Example";
const App=()=>{
  const [count,setCount]=useState(0);
  const increment=()=>setCount(count+1);
  return (
    <section>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <Example/>
    </section>
    
  )
}

export default App