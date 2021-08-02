import React from "react";
import "./footer.styles.scss";

import { ReactComponent as Logo } from "../../logo.svg";

import {
  Container,
  Grid,
  List,
  ListItem,
  TextField,
  IconButton,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={5}>
            <div className="brand-logo">
              <Logo />
            </div>
            <div className="about-us">
              <p>
                You begin with a text, you sculpt information, you chisel away
                what's not needed, you come to the point, make things clear, add
                value, you're a content person, you like words.
              </p>
            </div>
            <div className="copyright">
              <p>
                &copy; Copyright 2021 All rights reserved | designed and
                developed by <b>Rizvi</b>
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <div className="footer-heading">
              <h4>Useful Links</h4>
            </div>
            <List component="ul" className="footer-links">
              <ListItem>
                <Link to={"/about-us"}>About Us</Link>
              </ListItem>
              <ListItem>
                <Link to={"/join-us"}>Join Us</Link>
              </ListItem>
              <ListItem>
                <Link to={"/contact"}>Contact</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <div className="footer-heading">
              <h4>Categories</h4>
            </div>
            <List component="ul" className="footer-links">
              {React.Children.toArray(
                categories
                  .filter((el, idx) => idx < 4)
                  .map((category) => (
                    <ListItem>
                      <Link
                        to={`/category/${category.name.replaceAll(" ", "-")}`}
                      >
                        {category.name}
                      </Link>
                    </ListItem>
                  ))
              )}
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="footer-heading">
              <h4>Join Our Newsletter</h4>
            </div>
            <form autoComplete="off" className="newsletter-form">
              <TextField
                id="outlined-basic"
                type="email"
                label="Enter your email"
                variant="outlined"
                required
                fullWidth
              />
            </form>

            <div className="social-icons">
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <PinterestIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
