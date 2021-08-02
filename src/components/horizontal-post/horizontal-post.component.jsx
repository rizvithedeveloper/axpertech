import React from "react";
import "./horizontal-post.styles.scss";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { categoryPath, postPath } from "../../Constants/pathConstants";
import { getStandardDate } from "../../Constants/dateConstants";
import { removeSpaces } from "../../Constants/functionConstants";

function HorizontalPost(props) {
  const { id, title, categoryId, publishedDate, featuredImage, body } = props;
  const categories = useSelector((state) => state.categories);
  const postCategory = categories.filter((el, idx) => el._id === categoryId);

  return (
    <div className="horizontal-post">
      <Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={12}>
          <Link
            to={`/blog/${title.replaceAll(" ", "-").replace(":", "")}`}
            className="post-image"
          >
            <img src={featuredImage} alt="Post" />
          </Link>
        </Grid>
        <Grid item md={8} sm={6} xs={12}>
          <div className="post-details">
            <div className="post-info">
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
              <div className="publish-date">
                {getStandardDate(publishedDate)}
              </div>
            </div>
            <div className="post-title">
              <Link to={postPath(id, title, publishedDate)} className="title">
                {title}
              </Link>
            </div>
            <div className="post-description">
              {React.Children.toArray(
                body
                  .filter((el, idx) => idx < 1)
                  .map((description) => <p>{description}</p>)
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HorizontalPost;
