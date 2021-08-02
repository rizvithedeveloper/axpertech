import React from "react";
import "./category-page-posts.styles.scss";

import { Grid, Button } from "@material-ui/core";

import ContentOverlayPost from "../../components/content-overlay-post/content-overlay-post.component";
import StandardPost from "../../components/standard-post/standard-post.component";
import HorizontalPost from "../../components/horizontal-post/horizontal-post.component";

function CategoryPagePosts({ posts }) {
  return (
    <div className="category-page-posts">
      <div className="top-post">
        {React.Children.toArray(
          posts
            .filter((el, idx) => idx < 1)
            .map(({ _id, ...otherProps }) => (
              <ContentOverlayPost id={_id} {...otherProps} />
            ))
        )}
      </div>
      <div className="medium-posts">
        <Grid container spacing={4}>
          {React.Children.toArray(
            posts
              .filter((el, idx) => idx < 2)
              .map(({ _id, ...otherProps }) => (
                <Grid item xs={12} sm={6} md={6}>
                  <StandardPost id={_id} {...otherProps} />
                </Grid>
              ))
          )}
        </Grid>
      </div>
      <div className="bottom-posts">
        {React.Children.toArray(
          posts.map(({ _id, ...otherProps }) => (
            <Grid item xs={12} sm={12} md={12}>
              <HorizontalPost id={_id} {...otherProps} />
            </Grid>
          ))
        )}
      </div>

      <Button className="load-more-button">Load More</Button>
    </div>
  );
}

export default CategoryPagePosts;
