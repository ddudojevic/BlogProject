const fs = require("fs");
const Post = require("../models/Posts");
const Comment = require("../models/Comments");

exports.getPosts = (req, res) => {
  Post.fetchAll((posts) => {
    res.render("posts", {
      pageTitle: "Posts",
      path: "/posts",
      posts: posts,
    });
  });
};

exports.getAddPost = (req, res) => {
  res.render("add-post", { pageTitle: "Add your post" });
};

exports.postAddPost = (req, res) => {
  const { id, title, imgUrl, shortDesc, description } = req.body;
  const post = new Post(id, title, imgUrl, shortDesc, description);
  post.save();
  res.redirect("/");
};

exports.getPost = (req, res) => {
  const id = req.params.id;

  Post.findById(id, (post) => {
    if (!post) {
      const error = { title: "Error", message: "Not Found" };
      return res.render("error", {
        pageTitle: error.title,
        error,
      });
    }

    Comment.findById(id, (comments) => {


      res.render("post-details", {
        pageTitle: post.title,
        path: "/posts/:id",
        post: post,
        comments: comments,
      });
    });
  });
};
