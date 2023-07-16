const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
const postsRoutes = require("./routes/post.routes");
const errorRoutes = require("./routes/error.routes");
const commentRoutes = require("./routes/comment.routes");

app.use(postsRoutes);
app.use(errorRoutes);
app.use(commentRoutes);

app.listen(5000);
