import './App.css';
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {
 return (
    <div className="App">
 <div className="header">
        <img
          className="movie-head-pic"
          alt="movie-time"
          src="https://media.istockphoto.com/vectors/movie-time-poster-vintage-cinema-film-projector-home-movie-theater-vector-id1168570266?k=20&m=1168570266&s=612x612&w=0&h=bMfhtb2a-m1iALFYtXn9f_3jUwy33ydjF2cNiIb_DqQ="
        />
        <h1 className="heaad">MOVIES BLOG</h1>
      </div>
      <hr />
          <Addmovie />

    </div>
  );
  
}

export default App;
function Movies({ poster, name, rating, summary }) {
  return (
    <div className="movie">
      <div>
        <img className="poster" alt="Poster" src={poster} />
      </div>
      <div className="movie-detail">
        <h2>{name}</h2>
        <h4>
          <span>Rating : </span>
          {rating}⭐
        </h4>
        <p className="summary">{summary}</p>
        <Counter />
      </div>
    </div>
  );
}
function Counter(){
  const[like,setLike] = useState(0);//usestate retruns an array
  const[dislike,setDislike] = useState(0);//usestate retruns an array

  return(<div className="Counter-Cont">
    <Button variant="outlined" color="warning" onClick={()=>setLike(like+1)}>👍 {like}</Button>
    <Button variant="outlined" color="warning" onClick={()=>setDislike(dislike+1)}>👎 {dislike}</Button>

   {/* <button onClick={()=>setLike(like+1)}>👍 {like}</button>
    <button onClick={()=>setDislike(dislike+1)}>👎 {dislike}</button>*/}
  </div>);

}

function Addmovie(){
  const [movies,setMovies] = useState([
    {
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/816NlEQFMOL.jpg",
      name: "LIFE OF PIE",
      rating: "7.5",
      summary:
        "The storyline revolves around an Indian teenager named 'Pi' Patel, telling a novelist about his life story, and how at 16 he survives a shipwreck"
    }]);
    const [poster,setPoster]=useState("");
const [name,setName]=useState("");
const [rating,setRating]=useState("");
const [summary,setSummary]=useState("");
const movieobj = { 
  poster:poster,
  name: name,
  rating:rating,
  summary:summary
};
const resetForm=()=>{
  setName("");
  setPoster("");
  setRating("");
  setSummary("");
};
  return(
    <div>
      <br/>
    <div className="form-div">
      <TextField id="outlined-basic"
        label="Poster Link"
        color="warning"
        focused
        value ={poster} onChange={(event)=> setPoster(event.target.value)}
      />
      <TextField id="outlined-basic"
        label="Movie Name"
        color="warning"
        focused
        value ={name} onChange={(event)=> setName(event.target.value)}
      />
      <TextField id="outlined-basic"
        label="Movie Rating"
        color="warning"
        focused
        value ={rating} onChange={(event)=> setRating(event.target.value)}
      />
      <TextField id="outlined-basic"
        label="Movie Summary"
        color="warning"
        focused
        value ={summary} onChange={(event)=> setSummary(event.target.value)}
              />
      {/*} <label>Poster :</label>
  <input value ={poster} onChange={(event)=> setPoster(event.target.value)} placeholder="Enter Poster image link"/>
  <label>Name :</label>
  <input value ={name} onChange={(event)=> setName(event.target.value)} placeholder="Enter Movie Name"/>
  <label>Rating :</label>
  <input value ={rating} onChange={(event)=> setRating(event.target.value)} placeholder="Enter Movie Rating"/>
  <label>Summary :</label>
  <input value ={summary} onChange={(event)=> setSummary(event.target.value)} placeholder="Enter summary on Movie"/>
  */}
   </div><br/>
  <br/>
  <Button variant="outlined" color="warning" onClick={()=> {setMovies([movieobj,...movies]); resetForm();
         } }>Add Movie</Button>
        <hr/>
      {/* <button className="add-movie" onClick={()=> {setMovies([movieobj,...movies]); resetForm();
         } }>Add Movie</button>*/}
  {movies.map(({ poster, name, rating, summary}) => (
        <Movies poster={poster} name={name} rating={rating} summary={summary} />
       ))
        }
    </div>
  );
}
