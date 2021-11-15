import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Counter } from './Counter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import InfoIcon from '@material-ui/icons/Info';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useHistory } from "react-router-dom";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const useStyles = makeStyles({
    root: {
      backgroundColor:"rgb(35, 36, 34)",
    },
  })
export function Movies({ poster, name, rating, summary , index,deleteOp}) {
    const [show , setShow]=useState(true);
    const history=useHistory();
    const classes = useStyles();
  return (
    <div className="movie-div">
         <Card className={classes.root}>
      <div className="movie-detail">
      <CardActionArea>
      <CardMedia className="poster"
          component="img"
          alt="Poster"
          image={poster}
          title="Poster"
        />
        <CardContent>
        <div className="movie-info">
        <Typography component="h6">
        {name} <IconButton onClick={()=>setShow(!show)} >
        {show?<ExpandLessIcon style={{ color: "orange" }}  fontSize="small"/>:<ExpandMoreIcon style={{ color: "orange" }}  fontSize="small"/>}  
        </IconButton>
        </Typography>
          <Typography variant="body2" component="p"> 
          <IconButton  onClick={()=>history.push("/movies/edit/" + index)}>
<EditOutlinedIcon  fontSize="small"  style={{ color: "orange" }}/>
</IconButton>⭐{rating} 
          <IconButton  onClick={()=>history.push("/movies/" + index)}><InfoOutlinedIcon fontSize="small" style={{ color: "orange" }}/></IconButton> 
         
       </Typography>
        </div>
       {show ? <p className="summary">{summary}</p> : ""} 
       <div className="movie-footer">
        <Counter/>
        
        {deleteOp}
      </div>
        </CardContent>
        </CardActionArea>
      </div>
      </Card>
    </div>
    
  );
}
