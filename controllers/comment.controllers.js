const fs = require("fs");
const Comment = require("../models/Comments");


exports.postComment = (req, res) => {
  const id = req.params.id;

  const { description } = req.body;
  const comment = new Comment(id, description);
  comment.save();
  res.redirect("/posts/" + id);
};
