import React from "react";
import "./breadcrumbs.styles.scss";

import { Breadcrumbs, Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

function BreadCrumbs({ page }) {
  const pageName = page.replaceAll("-", " ");
  return (
    <div className="breadcrumbs">
      <Container maxWidth="lg">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Home
          </Link>
          <Typography color="textPrimary">{pageName}</Typography>
        </Breadcrumbs>
        <h2>{pageName}</h2>
      </Container>
    </div>
  );
}

export default BreadCrumbs;
