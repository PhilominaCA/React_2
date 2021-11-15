import './App.css';
import React, { useState } from "react";
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Addmovie } from './Addmovie';
import { Movieform } from "./Movieform";
import { Movies } from "./Movies";
import { movieList } from "./movieList";
import { Addmov } from './Addmov';
import { Editmovie } from './Editmovie';


function App() {
  const [mov,setMov]=useState(movieList);
 return (
    <div className="App">
 <div className="header">
 <img
          className="movie-head-pic"
          alt="movie-time"
          src="https://media.istockphoto.com/vectors/movie-time-poster-vintage-cinema-film-projector-home-movie-theater-vector-id1168570266?k=20&m=1168570266&s=612x612&w=0&h=bMfhtb2a-m1iALFYtXn9f_3jUwy33ydjF2cNiIb_DqQ="
        />
        <Link to="/">Home</Link>      
        <Link to="/add">Add Movie</Link>
              <Link to="/movies">Movies Collection</Link> 
              <Link to="/movies/add">Add New</Link>
              
      </div>
      <div>
        <Switch>
        <Route exact path="/">
<Home/>         </Route>
<Route path="/movies/add">
         <Movieform movies={mov} setMovies={setMov}/>
       </Route>
       <Route path="/movies/edit/:id">
         <Editmovie movies={mov} setMovies={setMov}/>
       </Route>
<Route path="/movies/:id"> 
<Addmov movies={mov}></Addmov>
</Route>
          <Route path="/movies">
            <Addmovie movies={mov} setMovies={setMov}/>
               </Route>      
        <Route path="**">
        <Errorpage/> 
        </Route>
        </Switch>
        <hr/>
        </div>
    </div>
  );
  
}

export default App;

export function Errorpage(){
  const styles={width: "40%"};
  return(
<div className="error-page">
<img style={styles} src="https://image.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"></img></div>
  );
}
export function Home(){
  return(
<div><p>Home Arrived</p></div>
  );
}

