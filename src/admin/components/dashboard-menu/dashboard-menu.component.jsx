import React from "react";
import "./dashboard-menu.styles.scss";

import { withRouter } from "react-router";
import { ListItemText, List, ListItem, ListItemIcon } from "@material-ui/core";
import AssessmentRoundedIcon from "@material-ui/icons/AssessmentRounded";
import PieChartRoundedIcon from "@material-ui/icons/PieChartRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import CommentRoundedIcon from "@material-ui/icons/CommentRounded";

import useStyles from "./styles";

import SideBarCollapse from "../side-bar-collapse/side-bar-collapse.component";

function DashboardMenu(props) {
  const classes = useStyles();
  const { history } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index, routeName) => {
    setSelectedIndex(index);
    history.push("/dashboard/" + routeName);
  };
  return (
    <List component="nav" className={`${classes.leftList} sideMenu`}>
      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0, "overview")}
      >
        <ListItemIcon className={classes.icon}>
          <AssessmentRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Overview" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1, "analytics")}
      >
        <ListItemIcon className={classes.icon}>
          <PieChartRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2, "account")}
      >
        <ListItemIcon className={classes.icon}>
          <PersonRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem>

      <SideBarCollapse icon={EditRoundedIcon} text="Posts">
        <ListItem
          button
          className={classes.nested}
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3, "all-posts")}
        >
          <ListItemIcon className={classes.icon}>
            <EditRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="All Posts" />
        </ListItem>
        <ListItem
          button
          className={classes.nested}
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4, "add-post")}
        >
          <ListItemIcon className={classes.icon}>
            <PostAddRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Add Post" />
        </ListItem>
      </SideBarCollapse>

      <SideBarCollapse icon={PeopleAltRoundedIcon} text="Users">
        <ListItem
          button
          className={classes.nested}
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5, "all-users")}
        >
          <ListItemIcon className={classes.icon}>
            <GroupRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="All Users" />
        </ListItem>
        <ListItem
          button
          className={classes.nested}
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6, "add-user")}
        >
          <ListItemIcon className={classes.icon}>
            <PersonAddRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Add User" />
        </ListItem>
      </SideBarCollapse>

      <SideBarCollapse icon={CommentRoundedIcon} text="Comments">
        <ListItem
          button
          className={classes.nested}
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7, "all-comments")}
        >
          <ListItemIcon className={classes.icon}>
            <CommentRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="All Comments" />
        </ListItem>
      </SideBarCollapse>
    </List>
  );
}

export default withRouter(DashboardMenu);
