const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const p = path.join(__dirname, "..", "data", "posts.json");
const Comment = require("../models/Comments");
const getPostsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) cb([]);
    else if (!err) {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Posts {
  constructor(id, title, imgUrl, email, kontaktBroj, description) {
    this.id = v4();
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.email = email;
    this.kontaktBroj = kontaktBroj
  }

  save() {
    getPostsFromFile((posts) => {
      posts.unshift(this);
      fs.writeFile(p, JSON.stringify(posts), (err) => {
        console.log("err");
      });
    });
  }
  static fetchAll(cb) {
    getPostsFromFile(cb);
  }

  static findById(id, cb) {
    getPostsFromFile((posts) => {
      const post = posts.find((post) => post.id === id);
      cb(post);
    });
  }
};
