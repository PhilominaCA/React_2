import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory,useParams } from "react-router-dom";


export function Editmovie({ movies, setMovies }) {
    const { id } = useParams();
    const selectiveMovie = movies[id];
  const [poster, setPoster] = useState(selectiveMovie.poster);
  const [name, setName] = useState(selectiveMovie.name);
  const [rating, setRating] = useState(selectiveMovie.rating);
  const [summary, setSummary] = useState(selectiveMovie.summary);
  const [trailer, setTrailer] = useState(selectiveMovie.trailer);
  const hist = useHistory();

  const movieupd = {
    poster: poster,
    name: name,
    rating: rating,
    summary: summary,
    trailer: trailer
  };

  return (<div className="form-div">
    <h2>Add a new Movie!</h2>
    <TextField id="outlined-basic"
      label="Poster Link"
      color="warning"
      focused
      value={poster} onChange={(event) => setPoster(event.target.value)} />
    <TextField id="outlined-basic"
      label="Movie Name"
      color="warning"
      focused
      value={name} onChange={(event) => setName(event.target.value)} />
    <TextField id="outlined-basic"
      label="Movie Rating"
      color="warning"
      focused
      value={rating} onChange={(event) => setRating(event.target.value)} />
    <TextField id="outlined-basic"
      label="Movie Summary"
      color="warning"
      focused
      value={summary} onChange={(event) => setSummary(event.target.value)} />
    <TextField id="outlined-basic"
      label="Movie Trailer"
      color="warning"
      focused
      value={trailer} onChange={(event) => setTrailer(event.target.value)} />
    <Button variant="outlined" color="warning" onClick={()=>{ const movieCopy=[...movies];
    movieCopy[id]=movieupd;
    setMovies(movieCopy);
hist.push("/movies");}
}>Save</Button>
  </div>);
}
