import React from "react";
import "./dashboard-header.styles.scss";
import useStyles from "./styles";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Divider,
} from "@material-ui/core";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import MenuIcon from "@material-ui/icons/Menu";

function DashboardHeader(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.Toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleClick}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Dashboard
        </Typography>

        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img
            className={classes.profileImg}
            src="https://preview.colorlib.com/theme/webmag/img/xauthor.png.pagespeed.ic.-dOTrKKeTJ.webp"
            alt="Profile"
          />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.MenuBox}
        >
          <div className="head">
            <h5>Muhammad Rizwan</h5>
          </div>
          <Divider />
          <MenuItem onClick={handleClose}>
            <PersonRoundedIcon />
            <span>Profile</span>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <SettingsRoundedIcon />
            <span>Setting</span>
          </MenuItem>
          <div className="logout-btn">
            <Button variant="outlined">Logout</Button>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default DashboardHeader;
