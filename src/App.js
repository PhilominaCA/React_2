import './App.css';
import {useState} from "react";

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
          {rating}
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
    <button onClick={()=>setLike(like+1)}>👍 {like}</button>
    <button onClick={()=>setDislike(dislike+1)}>👎 {dislike}</button>
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
    const [poster,setPoster]=useState("https://i.ytimg.com/vi/pg0yOoQBlww/sddefault.jpg");
const [name,setName]=useState("BAHUBALI 2 - The Conclusion");
const [rating,setRating]=useState("8.5");
const [summary,setSummary]=useState("Baahubali 2: The Conclusion is a 2017 Indian epic action film directed by S. S. Rajamouli, who co-wrote the film with K. V. Vijayendra Prasad.");
const movieobj = { 
  poster:poster,
  name: name,
  rating:rating,
  summary:summary
};
 
  return(
    <div>
      <br/>
       <label>Poster :</label>
  <input onChange={(event)=> setPoster(event.target.value)} placeholder="Enter Poster image link"/>
  <label>Name :</label>
  <input onChange={(event)=> setName(event.target.value)} placeholder="Enter Movie Name"/>
  <label>Rating :</label>
  <input onChange={(event)=> setRating(event.target.value)} placeholder="Enter Movie Rating"/>
  <label>Summary :</label>
  <input onChange={(event)=> setSummary(event.target.value)} placeholder="Enter summary on Movie"/>
  <br/>
  <br/>
        <button className="add-movie" onClick={()=> setMovies([movieobj,...movies])}>Add Movie</button>
  {movies.map(({ poster, name, rating, summary}) => (
        <Movies poster={poster} name={name} rating={rating} summary={summary} />
       ))
        }
    </div>
  );
}
