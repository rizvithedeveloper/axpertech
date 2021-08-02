import React from "react";
import "./top-posts.styles.scss";

import Container from "@material-ui/core/Container";
import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import ContentOverlayPost from "../content-overlay-post/content-overlay-post.component";

function TopPosts() {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <div className="top-posts">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {posts
            .filter((el, idx) => idx < 2)
            .map(({ _id, ...otherProps }) => (
              <Grid item key={_id} xs={12} sm={6} md={6}>
                <ContentOverlayPost id={_id} {...otherProps} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}

export default TopPosts;
