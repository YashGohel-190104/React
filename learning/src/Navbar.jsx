import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/netflixhome">
              Home 
            </Link>
          </li>
          {/* <li className="nav-item active">
            <Link className="nav-link" to="/netflixmovie">
              movies
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/netflixshows">
              Shows
            </Link>
          </li> */}
          <li className="nav-item active">
            <Link className="nav-link" to="/netflixgames">
              Games 
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/formhendling">
              FormHendling 
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/ApiDemo">
              ApiDemo
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/CityState">
              Country
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/ApiDemo2">
              ApiDemo2
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/ApiDemo3">
              ApiDemo3
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/ApiDemo4">
              ApiDemo4
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/MovieApi">
              MovieApi
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/google">
              Google
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/postTweet">
              PostTwtter
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/BlogMain">
            BlogMain
            </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to="/mui">
           mui
            </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to="/mui2">
            Mui2
            </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to="/dashbord">
            DashBord
            </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to="/muilayout">
            MuiLayout
            </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to="/uploadfile">
            File Upload
            </Link>
          </li>

        </ul>
      </div>
    </nav>
    </div>
  )
}
