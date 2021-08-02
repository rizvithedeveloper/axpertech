import React from "react";
import "./posts-with-sidebar.styles.scss";

import { useSelector } from "react-redux";
import { Grid, Container } from "@material-ui/core";

import MostRead from "../most-read/most-read.component";
import ContentOverlayPost from "../content-overlay-post/content-overlay-post.component";
import StandardProps from "../standard-post/standard-post.component";
import SidebarFeaturedPosts from "../sidebar-featured-posts/sidebar-featured-posts.component";

function PostsWithSidebar() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="posts-with-sidebar">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={8} xs={12}>
            <div className="big">
              <Grid item md={12}>
                {posts
                  .filter((el, idx) => idx > posts.length - 2)
                  .map(({ _id, ...otherProps }) => (
                    <ContentOverlayPost key={_id} id={_id} {...otherProps} />
                  ))}
              </Grid>
            </div>
            <div className="small">
              <Grid container spacing={5}>
                {posts
                  .filter((el, idx) => idx < 6)
                  .map(({ _id, ...otherProps }) => (
                    <Grid key={_id} item xs={12} sm={6}>
                      <StandardProps id={_id} {...otherProps} />
                    </Grid>
                  ))}
              </Grid>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <MostRead />
            <SidebarFeaturedPosts />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PostsWithSidebar;
