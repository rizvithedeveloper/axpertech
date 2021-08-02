import React from "react";
import "./contact-us.styles.scss";

import {
  Container,
  Grid,
  List,
  ListItem,
  TextField,
  Button,
} from "@material-ui/core";

import Header from "../../components/header/header.component";
import BreadCrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import Footer from "../../components/footer/footer.component";

function ContactUsPage() {
  return (
    <div className="contact-us">
      <Header />
      <BreadCrumbs page="Contact" />
      <Container maxWidth="lg" className="contact-container">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={6}>
            <h2>Contact Information</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <List component="ul">
              <ListItem>
                <b>Email: </b>
                <a href="mailto:hello@axpertech.com">hello@axpertech.com</a>
              </ListItem>
              <ListItem>
                <b>Phone: </b>
                <p>+1234567890</p>
              </ListItem>
              <ListItem>
                <b>Address: </b>
                <p>Example State, Street # 12345</p>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <h2>Send a Message</h2>
            <form autoComplete="off" className="contact-form">
              <TextField
                type="email"
                label="Email"
                name="email"
                variant="outlined"
              />
              <TextField
                type="text"
                label="Subject"
                name="subject"
                variant="outlined"
              />
              <TextField
                type="text"
                label="Message"
                name="message"
                variant="outlined"
              />
              <Button type="submit">Submit</Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default ContactUsPage;
