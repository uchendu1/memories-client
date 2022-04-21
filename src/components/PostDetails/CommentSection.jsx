import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";

const CommentSection = ({ post }) => {
  console.log("CommentSection", post);
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  
  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">Comment</Typography>
        </div>
      </div>
    </div>
  );
};
export default CommentSection;
