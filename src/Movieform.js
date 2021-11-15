import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from "react";
import { useHistory } from "react-router-dom";


export function Movieform({ movies, setMovies }) {
    const [poster, setPoster] = useState("");
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");
    const hist = useHistory();

    const movieobj = {
        poster: poster,
        name: name,
        rating: rating,
        summary: summary,
        trailer:trailer
    };

    const resetForm = () => {
        setName("");
        setPoster("");
        setRating("");
        setSummary("");
        setTrailer("");
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
        <Button variant="outlined" color="warning" onClick={() => {
            setMovies([movieobj, ...movies]); resetForm(); hist.push("/movies");
        }}>Add Movie</Button>
    </div>);
}
