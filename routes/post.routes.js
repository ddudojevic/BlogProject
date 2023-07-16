const express = require("express");

const router = express.Router();
const PostController = require("../controllers/post.controllers");

router.get("/", (req, res) => res.redirect("posts"));
router.get("/posts", PostController.getPosts);

router.get("/add-post", PostController.getAddPost);
router.post("/add-post", PostController.postAddPost);

router.get("/posts/:id", PostController.getPost);

module.exports = router;
