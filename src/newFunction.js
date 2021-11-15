import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from "react";

export function Movieform(poster, setPoster, name, setName, rating, setRating, summary, setSummary, setMovies, movieobj, movies, resetForm) {
    return <div className="form-div">
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
        <Button variant="outlined" color="warning" onClick={() => {
            setMovies([movieobj, ...movies]); resetForm();
        }}>Add Movie</Button>
        {/*} <label>Poster :</label>
        <input value ={poster} onChange={(event)=> setPoster(event.target.value)} placeholder="Enter Poster image link"/>
        <label>Name :</label>
        <input value ={name} onChange={(event)=> setName(event.target.value)} placeholder="Enter Movie Name"/>
        <label>Rating :</label>
        <input value ={rating} onChange={(event)=> setRating(event.target.value)} placeholder="Enter Movie Rating"/>
        <label>Summary :</label>
        <input value ={summary} onChange={(event)=> setSummary(event.target.value)} placeholder="Enter summary on Movie"/>
        */}
    </div>;
}
