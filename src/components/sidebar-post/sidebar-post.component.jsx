import React from "react";
import "./sidebar-post.styles.scss";

import { Link } from "react-router-dom";

import { postPath } from "../../Constants/pathConstants";

function SidebarPost(props) {
  const { id, title, featuredImage, publishedDate } = props;

  return (
    <div className="sidebar-post">
      <Link to={postPath(id, title, publishedDate)} className="post-image">
        <img src={featuredImage} alt="Post" />
      </Link>
      <Link to={postPath(id, title, publishedDate)} className="post-title">
        {title}
      </Link>
    </div>
  );
}

export default SidebarPost;
