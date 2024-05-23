import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixGame = () => {

    var games = [
        {
            id: 1,
            name: "Clash of Clans",
        },
        {
            id: 2,
            name: "Free Fire",
        },
        {
            id:3,
            name:"PubG",
        }
    ]
  return (
    <div>
        <h1>NetflixGame ......</h1>
        <h1>NETFLIX GAMES...</h1>
        <div>
            <ul>
                {
                    games.map((games)=>{
                        return(
                            <li><Link to ={`/playgame/${games.id}`}>{games.name}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}
