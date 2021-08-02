import React from "react";
import "./standard-post.styles.scss";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { categoryPath, postPath } from "../../Constants/pathConstants";
import { getStandardDate } from "../../Constants/dateConstants";
import {
  removeSpaces,
  getPostCategory,
} from "../../Constants/functionConstants";

function StandardPost(props) {
  const { id, title, categoryId, publishedDate, featuredImage } = props;
  const categories = useSelector((state) => state.categories);
  const postCategory = getPostCategory(categories, categoryId);

  return (
    <div className="standard-post">
      <Link to={`/blog/${title.replaceAll(" ", "-").replace(":", "")}`}>
        <div
          className="post-image"
          style={{ backgroundImage: `url(${featuredImage})` }}
        ></div>
      </Link>
      <div className="post-bottom">
        <div className="post-details">
          {React.Children.toArray(
            postCategory.map((category) => (
              <Link
                className={`category ${removeSpaces(category.name)}`}
                to={categoryPath(category)}
              >
                {category.name.toUpperCase()}
              </Link>
            ))
          )}
          <div className="publish-date">{getStandardDate(publishedDate)}</div>
        </div>
        <div className="post-title">
          <Link to={postPath(id, title, publishedDate)} className="title">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StandardPost;
