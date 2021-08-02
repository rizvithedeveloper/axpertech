import React from "react";
import "./post-author.styles.scss";

import { useSelector } from "react-redux";
import { Grid, ListItem, List, IconButton } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

function PostAuthor({ id }) {
  const users = useSelector((state) => state.users);
  const author = users.filter((el, idx) => el._id === id);

  return (
    <div className="author">
      {React.Children.toArray(
        author.map((user) => (
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} md={3}>
              <div className="user-image">
                <img src={user.profilePic} alt="User Profile" />
              </div>
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <div className="user-details">
                <h2 className="user-name">{user.name}</h2>
                <p className="user-description">{user.description}</p>
                <List
                  component="ul"
                  className="user-social-links"
                  direction="row"
                >
                  <ListItem>
                    <IconButton onClick={() => window.open(user.facebook)}>
                      <FacebookIcon />
                    </IconButton>
                  </ListItem>
                  <ListItem>
                    <IconButton onClick={() => window.open(user.twitter)}>
                      <TwitterIcon />
                    </IconButton>
                  </ListItem>
                  <ListItem>
                    <IconButton onClick={() => window.open(user.linkedin)}>
                      <LinkedInIcon />
                    </IconButton>
                  </ListItem>
                  <ListItem>
                    <IconButton onClick={() => window.open(user.instagram)}>
                      <InstagramIcon />
                    </IconButton>
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>
        ))
      )}
    </div>
  );
}

export default PostAuthor;
