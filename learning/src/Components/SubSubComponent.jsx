import React from 'react'

export const SubSubComponent = (props) => {
  return (
    <div> <h1>SubSubComponent OF APP JS</h1>
    <h4 style={{color:props.homeStyle.color}}>{props.data.id}</h4></div>
  )
}
