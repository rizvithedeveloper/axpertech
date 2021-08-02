import React from "react";
import DashboardHeader from "../../components/dashboard-header/dashboard-header.component";
import DashbboardSidebar from "../../components/dashboard-sidebar/dashboard-sidebar.component";
import useStyles from "./styles";

import { Switch, Route } from "react-router-dom";

import AllPostsPage from "../posts/all-posts/all-posts.component";

function DashboardPage(props) {
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <DashboardHeader handleClick={handleDrawerToggle} />
      <DashbboardSidebar
        handleClick={handleDrawerToggle}
        mobileOpen={mobileOpen}
        container={container}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/dashboard/all-posts" component={AllPostsPage} />
        </Switch>
      </main>
    </div>
  );
}

export default DashboardPage;
