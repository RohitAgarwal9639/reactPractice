import React from 'react'
import { Data,Data1 } from '../App'   
const ComponentC = () => {
  return (
    <Data.Consumer>
      {name=>{
        {/* return <h1>{name}</h1> */}
        return(
            <Data1.Consumer>
                {age=>{
                return(
                    <h1>
                    My name is {name} and my age is {age}
                    </h1>
                )
                }}
            </Data1.Consumer>
        )
      }}
    </Data.Consumer>
  )
}

export default ComponentC
