import React from "react";
import "./single-post-body.styles.scss";

function SinglePostBody(props) {
  const { body, featuredImage } = props;
  return (
    <div className="single-post-body">
      {React.Children.toArray(
        body
          .filter((el, idx) => idx < 1)
          .map((paragraph) => (
            <div className="paragraph">
              <p>{paragraph}</p>
            </div>
          ))
      )}

      <div className="post-image">
        <img src={featuredImage} alt="Post" />
      </div>

      {React.Children.toArray(
        body
          .filter((el, idx) => idx > 0)
          .map((paragraph) => (
            <div className="paragraph">
              <p>{paragraph}</p>
            </div>
          ))
      )}
    </div>
  );
}

export default SinglePostBody;
