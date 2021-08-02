import React from "react";
import "./comment-box.styles.scss";

import { TextareaAutosize, Button } from "@material-ui/core";

function CommentBox() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="comment-box-wrapper">
      <h2>Leave a Comment</h2>
      <p>Find a post helpful? Leave us a comment now!</p>
      <form
        autoComplete="false"
        className="comment-form"
        onSubmit={handleSubmit}
      >
        <TextareaAutosize
          aria-label="maximum height"
          placeholder="Write a comment"
          defaultValue=""
        />
        <Button variant="contained" type="submit">
          Post Comment
        </Button>
      </form>
    </div>
  );
}

export default CommentBox;
