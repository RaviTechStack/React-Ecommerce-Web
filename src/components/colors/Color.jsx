import React from 'react'
import "./color.css"

const Color = ({color}) => {
  if(color){
    return(
        color.map((curr) =>{
            <button>{curr}</button>
        })
    )
  }
  else{
    return(
        <>
        <h1>hei</h1>
        
        </>
    )
  }
   
}

export default Color
