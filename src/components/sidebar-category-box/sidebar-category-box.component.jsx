import React from "react";
import "./sidebar-category-box.styles.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { List, ListItem, Divider } from "@material-ui/core";

import { categoryPath } from "../../Constants/pathConstants";
import { removeSpaces } from "../../Constants/functionConstants";

function SidebarCategoryBox() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="sidebar-category-box">
      <div className="sidebar-heading">
        <h2>Categories</h2>
      </div>
      <List component="ul">
        {React.Children.toArray(
          categories.map((category) => (
            <div className="category-Item-wrapper">
              <ListItem>
                <Link
                  to={categoryPath(category)}
                  className={`category-box ${removeSpaces(category.name)}`}
                >
                  <span className="category-name">{category.name}</span>
                  <span className="post">{category.posts.length}</span>
                </Link>
              </ListItem>
              <Divider />
            </div>
          ))
        )}
      </List>
    </div>
  );
}

export default SidebarCategoryBox;
