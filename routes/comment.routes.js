const express = require("express");
const router = express.Router();

const CommentController = require('../controllers/comment.controllers');

router.post("/posts/:id", CommentController.postComment);

module.exports = router;
