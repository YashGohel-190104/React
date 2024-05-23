import React from 'react'

export const SubComponents = (props) => {

    var homeStyle ={
        color:"red",
        backgroundColor:"yellow",
    }

  return (
    <div>
        <h1>
            SubComponents is child of App
        </h1>
        <h1>{props.data.id} {props.data.name}</h1>
    </div>
  )
}
