import React from "react";
import "./category-page.styles.scss";

import { useParams } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getCurrentCategoryId } from "../../Constants/functionConstants";

import Header from "../../components/header/header.component";
import BreadCrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import CategoryPagePosts from "../../components/category-page-posts/category-page-posts.component";
import MostRead from "../../components/most-read/most-read.component";
import SidebarCategoryBox from "../../components/sidebar-category-box/sidebar-category-box.component";
import Footer from "../../components/footer/footer.component";

function CategoryPage() {
  const posts = useSelector((state) => state.posts);
  const categories = useSelector((state) => state.categories);
  const { categoryName } = useParams();

  const categoryId = getCurrentCategoryId(categories, categoryName);
  const categoryPosts = posts.filter((el, idx) => el.categoryId === categoryId);

  return (
    <div className="category-page">
      <Header />
      <BreadCrumbs page={categoryName} />
      <Container maxWidth="lg" className="category-page-content">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={7} md={8}>
            <CategoryPagePosts posts={categoryPosts} />
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <MostRead />
            <SidebarCategoryBox />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default CategoryPage;
