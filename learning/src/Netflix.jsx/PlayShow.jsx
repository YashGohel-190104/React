import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayShow = () => {

    const id = useParams().id;

    console.log("usePerms.....",useParams);
  return (
    <div>
        <p>PlayShow with id = {id} </p>
    </div>
  )
}
