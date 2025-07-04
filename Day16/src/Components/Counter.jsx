import React from 'react'
import { useReducer,useState } from 'react'
import { counterReducer,initialState } from '../CounterReducer'
const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0);
    const handleIncrement = () => {
        dispatch({ type: 'increment' });
    }
    const handleDecrement = () => {
        dispatch({ type: 'decrement' });
    }
    const handleIncrementByAnount = () => {
        dispatch({ type: 'incrementByAmount', payload: Number(inputValue) });
        setInputValue(0);
    }
    const handleDecrementByAnount = () => {
        dispatch({ type: 'decrementByAmount', payload: Number(inputValue) });
        setInputValue(0);
    }
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <input type='text' value={inputValue}  onChange={e=>setInputValue(e.target.value)} />
        <button onClick={handleIncrementByAnount}>Increment by Amount</button>
        <button onClick={handleDecrementByAnount}>Decrement by Amount</button>
      </div>
    </div>
  )
}

export default Counter
