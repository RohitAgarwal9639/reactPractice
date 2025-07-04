import { useRef } from "react"
import FocusInput from "./Components/FocusInput";
import Timer from "./Components/Timer";
const App=()=>{
  const inputElement = useRef(null);
  const focusInput=()=>{
    inputElement.current.focus();
    inputElement.current.value = "Rohit";
  }
  return (
    <main>
      <input type="text" ref={inputElement} />
      <button onClick={()=>focusInput()}>Focus & write Rohit</button>
      <FocusInput />
      <Timer />
    </main>
    
  )
}

export default App