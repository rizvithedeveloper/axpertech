import React from "react";
import "./single-post-banner.styles.scss";

import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";

import { categoryPath } from "../../Constants/pathConstants";
import { getStandardDate } from "../../Constants/dateConstants";
import {
  removeSpaces,
  getPostCategory,
} from "../../Constants/functionConstants";

function SinglePostBanner(props) {
  const { title, categoryId, publishedDate, featuredImage } = props;
  const categories = useSelector((state) => state.categories);
  const postCategory = getPostCategory(categories, categoryId);

  return (
    <div className="single-post-banner">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${featuredImage})` }}
      />
      <div className="post-bottom">
        <Container maxWidth="lg">
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
          <div className="author"></div>
          <h1 className="post-title">{title}</h1>
        </Container>
      </div>
    </div>
  );
}

export default SinglePostBanner;
