import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import React from "react";
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

export function Counter() {
  const [like, setLike] = useState(0); //usestate retruns an array
  const [dislike, setDislike] = useState(0); //usestate retruns an array

  return (<div className="Counter-Cont">
       <IconButton style={{ color: "green" }} onClick={() => setLike(like + 1)}>
<ThumbUpOutlinedIcon  fontSize="small"/> {like}
</IconButton>
<IconButton style={{ color: "red" }} onClick={() => setDislike(dislike + 1)}>
<ThumbDownOutlinedIcon   fontSize="small"/> {dislike}
</IconButton>

  </div>);

}
