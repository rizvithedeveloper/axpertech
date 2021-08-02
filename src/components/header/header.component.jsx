import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../logo.svg";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Container maxWidth="lg">
        <div className="brand">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>

        <nav className="navigation-bar">
          <ul>
            <li className="nav-link">
              <Link to="/category/news">News</Link>
            </li>
            <li className="nav-link">
              <Link to="/category/popular">Popular</Link>
            </li>
            <li className="nav-link">
              <Link to="/category/web-design">Web Design</Link>
            </li>
            <li className="nav-link">
              <Link to="/category/javascript">JavaScript</Link>
            </li>
            <li className="nav-link">
              <Link to="/category/css">CSS</Link>
            </li>
            <li className="nav-link">
              <Link to="/category/jquery">jQuery</Link>
            </li>
          </ul>
        </nav>

        <div className="header-features">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      </Container>
    </div>
  );
}

export default Header;
