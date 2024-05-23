import React from 'react'

export const HomeComponents = (props) => {

    const homeStyle = {
        backgroundColor: 'lightblue',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        height: '200px',
        width: '50%'
    }

  return (
    <div style={homeStyle}>
        <h1 style={{color:"red" , font : "inherit"}}>HomeComponents</h1>
        <h2>{props.title}</h2>
        <h2>{props.ye}</h2>
        <h3>{props.data.id}</h3>
    </div>
  )
}
