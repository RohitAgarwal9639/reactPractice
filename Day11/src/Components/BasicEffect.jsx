import React, { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(()=>{
        console.log("Basiceffect mounted");
    },[])
  return (
    <div>
      <h1>Check the console </h1>
    </div>
  )
}

export default BasicEffect
