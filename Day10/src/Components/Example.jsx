import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Example = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        async function getData() {
           const res=await fetch("https://jsonplaceholder.typicode.com/posts");
           const data=await res.json();
           if(data && data.length>0){
            setData(data);
           }
        }
        getData();
    },[])
  return (
    <div>
      <ul>
        {data.map(todo=>(
            <section key={todo.id}>
                <li >{todo.title}</li>
                <li >body----{todo.body}</li>
            </section>
        ))}
      </ul>
    </div>
  )
}

export default Example
