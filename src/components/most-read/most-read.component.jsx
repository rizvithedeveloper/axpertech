import React from "react";
import "./most-read.styles.scss";

import { useSelector } from "react-redux";
import SidebarPost from "../sidebar-post/sidebar-post.component";

function MostRead() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="most-read">
      <div className="sidebar-heading">
        <h2>Most Read</h2>
      </div>

      {posts
        .filter((el, idx) => idx < 4)
        .map(({ _id, ...otherProps }) => (
          <SidebarPost key={_id} id={_id} {...otherProps} />
        ))}
    </div>
  );
}

export default MostRead;
