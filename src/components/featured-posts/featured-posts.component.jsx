import React from "react";
import "./featured-posts.styles.scss";

import { useSelector } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import StandardPost from "../standard-post/standard-post.component";

function FeaturedPosts() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="featured-posts">
      <Container maxWidth="lg">
        <div className="heading">
          <h2>Featured Posts</h2>
        </div>
        <Grid container spacing={3}>
          {posts
            .filter((el, idx) => idx < 3)
            .map(({ _id, ...otherProps }) => (
              <Grid item key={_id} xs={12} sm={6} md={4}>
                <StandardPost id={_id} {...otherProps} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}

export default FeaturedPosts;
