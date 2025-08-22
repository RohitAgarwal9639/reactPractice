import { useRef } from "react"

const FocusInput = () => {
    const inputRef=useRef<HTMLInputElement>(null);
    const handleFocus=()=>{
        inputRef.current?.focus();
    }
  return (
    
    <div>
      <input type="text" ref={inputRef} placeholder="Click the buttom to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default FocusInput
