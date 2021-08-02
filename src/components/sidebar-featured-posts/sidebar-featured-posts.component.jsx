import React from "react";
import "./sidebar-featured-posts.styles.scss";

import ContentOverlayPost from "../content-overlay-post/content-overlay-post.component";
import { useSelector } from "react-redux";

function SidebarFeaturedPosts() {
  const posts = useSelector((state) => state.posts);
  return (
    <div className="sidebar-featured-posts">
      <div className="sidebar-heading">
        <h2>Featured Posts</h2>
      </div>

      {posts
        .filter((el, idx) => idx < 3)
        .map(({ _id, ...otherProps }) => (
          <ContentOverlayPost key={_id} id={_id} {...otherProps} />
        ))}
    </div>
  );
}

export default SidebarFeaturedPosts;
