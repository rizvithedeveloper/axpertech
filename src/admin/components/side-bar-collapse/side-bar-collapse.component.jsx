import React from "react";
import "./side-bar-collapse.styles.scss";

import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

function SideBarCollapse(props) {
  const IconComponent = props.icon;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="side-bar-collapse">
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <IconComponent />
        </ListItemIcon>
        <ListItemText primary={props.text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.children}
        </List>
      </Collapse>
    </div>
  );
}

export default SideBarCollapse;
