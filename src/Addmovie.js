import { useState } from "react";
import React from "react";
import { Movies } from "./Movies";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export function Addmovie({movies,setMovies}) {
  return (
      <div className="movie-div">
        {movies.map(({ poster, name, rating, summary },index) => (
          <Movies poster={poster} name={name} rating={rating} summary={summary}  index={index} deleteOp={ 
          <IconButton aria-label="delete" onClick={()=>{
              const deleteMov= movies.filter((mov,idx)=> idx!=index);
              setMovies(deleteMov);
            }}>
          <DeleteForeverOutlinedIcon fontSize="small" style={{ color: "red" }} />
        </IconButton>}/>
        ))}
    </div>
  );
}

