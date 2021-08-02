import React from "react";
import "./horizontal-posts-list.styles.scss";

import { Container, Grid, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import HorizontalPost from "../horizontal-post/horizontal-post.component";
import SidebarCategoryBox from "../sidebar-category-box/sidebar-category-box.component";

function HorizontalPostsList() {
  const posts = useSelector((state) => state.posts);
  return (
    <div className="horizontal-posts-list">
      <Container maxWidth="lg">
        <div className="heading">
          <h2>Most Read</h2>
        </div>
        <Grid container spacing={3} justify="space-between">
          <Grid item md={8} sm={12} xs={12}>
            {posts.map(({ _id, ...otherProps }) => (
              <HorizontalPost id={_id} key={_id} {...otherProps} />
            ))}

            <Button
              variant="contained"
              color="primary"
              className="load-more-button"
            >
              Load More
            </Button>
          </Grid>
          <Grid item md={3} sm={12} xs={12}>
            <SidebarCategoryBox />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HorizontalPostsList;
