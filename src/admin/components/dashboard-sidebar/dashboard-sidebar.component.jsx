import React from "react";
import "./dashboard-sidebar.styles.scss";
import { useTheme } from "@material-ui/core/styles";

import { Drawer, Hidden } from "@material-ui/core";
import DashboardMenu from "../dashboard-menu/dashboard-menu.component";

import useStyles from "./styles";

function DashboardSidebar(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className="dashboard-sidebar">
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={props.container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={props.mobileOpen}
            onClose={props.handleClick}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DashboardMenu history={props.history} />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DashboardMenu history={props.history} />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default DashboardSidebar;
