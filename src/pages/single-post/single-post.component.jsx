import React from "react";
import "./single-post.styles.scss";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Grid, ListItem, List, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import MailIcon from "@material-ui/icons/Mail";

import Header from "../../components/header/header.component";
import SinglePostBanner from "../../components/single-post-banner/single-post-banner.component";
import SinglePostBody from "../../components/single-post-body/single-post-body.component";
import MostRead from "../../components/most-read/most-read.component";
import SidebarFeaturedPosts from "../../components/sidebar-featured-posts/sidebar-featured-posts.component";
import SidebarCategoryBox from "../../components/sidebar-category-box/sidebar-category-box.component";
import PostAuthor from "../../components/post-author/post-author.component";
import PostComments from "../../components/post-comments/post-comments.component";
import CommentBox from "../../components/comment-box/comment-box.component";
import Footer from "../../components/footer/footer.component";

function SinglePost() {
  const posts = useSelector((state) => state.posts);
  const { postId } = useParams();
  const currentPost = posts.filter((el, idx) => el._id === postId);

  return (
    <div className="single-post">
      <Header />
      {currentPost.map(({ _id, ...otherProps }) => (
        <SinglePostBanner key={_id} {...otherProps} />
      ))}
      <div className="main-post-section">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={2} md={1}>
              <List component="ul" className="share-icons" direction="column">
                <ListItem>
                  <IconButton className="facebook">
                    <FacebookIcon />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <IconButton className="twitter">
                    <TwitterIcon />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <IconButton className="linkedin">
                    <LinkedInIcon />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <IconButton className="pinterest">
                    <PinterestIcon />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <IconButton className="mail">
                    <MailIcon />
                  </IconButton>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={10} md={7}>
              <div className="post-body">
                {currentPost.map(({ _id, ...otherProps }) => (
                  <SinglePostBody key={_id} {...otherProps} />
                ))}
              </div>
              <div className="post-author">
                {React.Children.toArray(
                  currentPost.map(({ authorId }) => (
                    <PostAuthor id={authorId} />
                  ))
                )}
              </div>
              <div className="post-comments">
                {React.Children.toArray(
                  currentPost.map(({ _id }) => <PostComments postId={_id} />)
                )}
              </div>
              <div className="comment-box">
                <CommentBox />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MostRead />
              <SidebarFeaturedPosts />
              <SidebarCategoryBox />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default SinglePost;
