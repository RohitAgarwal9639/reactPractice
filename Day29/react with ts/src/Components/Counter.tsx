import { useReducer } from "react"
import { CounterReducer,type CounterState } from "../reducres/CounterReducer"

const intitialState:CounterState={count:0};

const Counter = () => {
    const [state,dispatch]=useReducer(CounterReducer,intitialState);
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={()=>{dispatch({type:'INCREMENT'})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'DECREMENT'})}}>Decrement</button>
    </div>
  )
}

export default Counter
