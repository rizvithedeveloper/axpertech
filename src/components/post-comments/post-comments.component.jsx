import React from "react";
import "./post-comments.styles.scss";

import { useSelector } from "react-redux";
import { Grid, Divider } from "@material-ui/core";

import { getStandardDate } from "../../Constants/dateConstants";

function PostComments({ postId }) {
  const allComments = useSelector((state) => state.comments);
  const users = useSelector((state) => state.users);
  const postComments = allComments.filter((el, idx) => el.postId === postId);
  return (
    <div className="comments">
      {postComments.length ? <h2> {postComments.length} Comments </h2> : null}

      {React.Children.toArray(
        postComments.map((comment) => {
          const userArr = users.filter((el, idx) => el._id === comment.userId);
          return (
            <>
              {React.Children.toArray(
                userArr.map((user) => (
                  <Grid container spacing={3}>
                    <Grid item xs={3} sm={3} md={2}>
                      <div className="user-image">
                        <img src={user.profilePic} alt="User Profile" />
                      </div>
                    </Grid>
                    <Grid item xs={9} sm={9} md={10}>
                      <div className="comment-details">
                        <h4 className="user-name">{user.name}</h4>
                        <span className="comment-date">
                          {getStandardDate(comment.date)}
                        </span>
                        <p className="user-comment">{comment.text}</p>
                      </div>
                    </Grid>
                  </Grid>
                ))
              )}
              <Divider />
            </>
          );
        })
      )}
    </div>
  );
}

export default PostComments;
