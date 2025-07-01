
import { useEffect } from 'react';
import { useState } from 'react'

const Example = () => {
    const [name,setName]=useState(()=>{
        const savedName =localStorage.getItem("name");
        return savedName?JSON.parse(savedName):"";
    });
    
    const handleChange=(event)=>{
        setName(event.target.value);
    };
    useEffect(()=>{
        localStorage.setItem("name",JSON.stringify(name));
    },[]);
    const handleClear=()=>setName("");
  return (
    <div>
      <h1>Your name:{name}</h1>
      <input type="text" value={name} onChange={handleChange} placeholder='Enter your name'/>
      <button onClick={handleClear}>Clear name</button>
    </div>
  )
}

export default Example
