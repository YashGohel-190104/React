import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div>
        <h1>Netflix Shows</h1>
        <div>
            <ul>
                <li><Link to = "/PlayShow/1">Artical 370</Link></li>
                <li><Link to = "/PlayShow/2">Money Heist</Link></li>
                <li><Link to = "/PlayShow/3">Stranger Thing</Link></li>
                <li><Link to = "/PlayShow/4">Dark</Link></li>
                <li><Link to = "/PlayShow/5">AThe Witcher</Link></li>
            </ul>
        </div>
    </div>
  )
}
