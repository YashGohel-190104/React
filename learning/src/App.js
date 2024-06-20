// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HomeComponents } from './Components/HomeComponents';
import HeaderComponents from './Components/HeaderComponents';
import { MapDemoComponents } from './Components/MapDemoComponents';
import { SubComponents } from './Components/SubComponents';
import { Blog } from './Components/Blogs/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { NetflixDeshboard } from './Netflix.jsx/NetflixDeshboard';
import{NetflixHome} from './Netflix.jsx/NetflixHome';
import{NetflixMovie} from './Netflix.jsx/NetflixMovie';
import {ErrorPage} from './Netflix.jsx/ErrorPage';
import { ActionMovie } from './Netflix.jsx/ActionMovie';
import { CommedyMovie } from './Netflix.jsx/CommedyMovie';
import { HorrerMovie } from './Netflix.jsx/HorrerMovie';
import { NetflixShows } from './Netflix.jsx/NetflixShows';
import { NetflixGame } from './Netflix.jsx/NetflixGame';
import { PlayShow } from './Netflix.jsx/PlayShow';
import { PlayGames } from './Netflix.jsx/PlayGames';
import { FormHendling } from './FormComponents/FormHendling';
import { ApiDemo } from './Apis/ApiDemo';
import { CityState } from './Components/CityState';
import { ApiDemo2 } from './Apis/ApiDemo2';
import { ApiDemo3 } from './Apis/ApiDemo3';
import { ApiDemo4 } from './Apis/ApiDemo4';
import { MovieApi } from './Apis/MovieApi';
import { Google } from './Contex/Google';
function App() {

  // var name = "Yash Gohel"
  // var age = 20
  // var isActive = true
  // var user = {
  //   name: "Yash",
  //   age: 21
  // }

  // var title = "React JS"
  // var year = 2021

  // var data = {
  //   id : 1,
  //   namw : "Yash Gohel",
  //   age : 21
  // }

  return (
    <
// @ts-ignore
    div className="App">
     
      <Navbar></Navbar>
      <Routes>
      <Route path ="/" element = {<NetflixDeshboard/>}></Route>
      <Route path ="/NetflixHome" element = {<NetflixHome/>}></Route>
      <Route path = "/netflixmovie" element = {<NetflixMovie/>}></Route>
      <Route path="/netflixmovie/action" element = {<ActionMovie/>}></Route>
      <Route path="/netflixmovie/comedy" element = {<CommedyMovie/>}></Route>
      <Route path="/netflixmovie/horrer" element = {<HorrerMovie/>}></Route>
      <Route path= "/netflixshows" element = {<NetflixShows/>}></Route>
      <Route path="/playshow" element = {<PlayShow/>}></Route>
      <Route path= "/netflixgames" element = {<NetflixGame/>}></Route>
      <Route path= "/playgame" element = {<PlayGames/>}></Route>
      <Route path="/formhendling" element = {<FormHendling/>}></Route>
      <Route path='/ApiDemo' element = {<ApiDemo/>}></Route>
      <Route path='/cityState' element={<CityState/>}></Route>
      <Route path='/ApiDemo2' element= {<ApiDemo2/>}></Route>
      <Route path='/ApiDemo3' element= {<ApiDemo3/>}></Route>
      <Route path='/ApiDemo4' element = {<ApiDemo4/>}></Route>
      <Route path='/MovieApi' element = {<MovieApi/>}></Route>
      <Route path='/google' element = {<Google/>}></Route> 
           {/* <Route path = "/*" element = {<h1>ErrorPage</h1>}></Route> */}
       <Route path  ="/*" element = {<ErrorPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
