import React, { useEffect } from "react";
import "./index.css";
import { useDispatch } from "react-redux";

import { getPosts } from "./redux/actions/postActions";
import { getCategories } from "./redux/actions/categoryActions";
import { getUsers } from "./redux/actions/userActions";
import { getComments } from "./redux/actions/commentActions";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import SinglePost from "./pages/single-post/single-post.component";
import CategoryPage from "./pages/category-page/category-page.component";
import ContactUsPage from "./pages/contact-us/contact-us.component";
import DashboardPage from "./admin/pages/dashboard/dashboard.component";
import PageNotFound from "./pages/page-not-found/page-not-found.component";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getCategories());
    dispatch(getUsers());
    dispatch(getComments());
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route
        path="/:year/:month/:day/:postId/:postTitle"
        component={SinglePost}
      />
      <Route path="/category/:categoryName" component={CategoryPage} />
      <Route path="/contact" component={ContactUsPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;
