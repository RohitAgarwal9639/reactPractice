import { useState } from "react"
import UserProfile from "./Components/UserProfile";
import Todo from "./Components/Todo";


export default function App() {
  const [count,setCount]=useState<number>(0);

  const increment=()=>{
    setCount(prevCount=>prevCount+1);
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>

      <UserProfile />
      <Todo />
    </div>
  )
}
