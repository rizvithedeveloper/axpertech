import React from "react";
import "./homepage.styles.scss";

import Header from "../../components/header/header.component";
import TopPosts from "../../components/top-posts/top-posts.component";
import RecentPosts from "../../components/recent-posts/recent-posts.component";
import PostsWithSidebar from "../../components/posts-with-sidebar/posts-with-sidebar.component";
import FeaturedPosts from "../../components/featured-posts/featured-posts.component";
import HorizontalPostsList from "../../components/horizontal-posts-list/horizontal-posts-list.component";
import Footer from "../../components/footer/footer.component";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <TopPosts />
      <RecentPosts />
      <PostsWithSidebar />
      <FeaturedPosts />
      <HorizontalPostsList />
      <Footer />
    </div>
  );
}

export default HomePage;
