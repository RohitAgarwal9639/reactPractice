import React from 'react'
const geet="Hello";
const date=new Date();
const Greet = () => {
  return (
    <div>
      <h1>{geet} World</h1>
      <p>Date : {date.getDate()}</p>
    </div>
  )
}

export default Greet
