import React from "react";
import "./recent-posts.styles.scss";

import { Container, Grid } from "@material-ui/core";
import StandardPost from "../standard-post/standard-post.component";
import { useSelector } from "react-redux";

function RecentPosts() {
  const posts = useSelector((state) => state.posts);
  return (
    <div className="recent-posts">
      <Container maxWidth="lg">
        <h2>Recent Posts</h2>
        <Grid container spacing={3} className="post-list">
          {posts
            .filter((el, idx) => idx < 6)
            .map(({ _id, ...otherProps }) => (
              <Grid key={_id} item xs={12} sm={6} md={4}>
                <StandardPost id={_id} {...otherProps} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}

export default RecentPosts;
