import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router-dom";

export function Addmov({ movies }) {
  const [show, setShow] = useState(false);
  const hist = useHistory();
  const { id } = useParams();
  //  if(id>movies.length-1)
  //{
  //hist.push("**");  }
  //check the index;
  const selectiveMovie = movies[id];
  console.log(selectiveMovie);
  return (
    <div className="movie-trail">
      <iframe width="60%" height="390" src={selectiveMovie.trailer} 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <div className="trailer-specs">
        <div><h2><Button variant="outlined" color="warning" onClick={() => hist.goBack()}><ArrowBackIosIcon /> Back</Button>
        </h2></div>
        <div><h2>{selectiveMovie.name} - ⭐ {selectiveMovie.rating}{"  "}
          <IconButton color="warning" onClick={() => setShow(!show)}>
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton> </h2>
        </div></div>
      {show ? <p className="summary">{selectiveMovie.summary}</p> : ""}
    </div>
  );
}
