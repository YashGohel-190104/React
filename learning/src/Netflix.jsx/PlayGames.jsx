import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayGames = () => {
    const id = useParams().id;
    console.log("usePerms......",useParams);

  return (
    <div>
        <h1>
            PlayGames with id = {id}
        </h1>
    </div>
  )
}
