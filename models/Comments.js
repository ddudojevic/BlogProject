const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "..", "data", "comments.json");


const getCommentFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) cb([]);
    else if (!err) {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Comments {
  constructor(id, description) {
    this.id = id;
    this.description = description;
  };

  save() {
    getCommentFromFile((comments) => {
      comments.push(this);
      fs.writeFile(p, JSON.stringify(comments), (err) => {
        console.log("err");
      });
    });
  }
  static findById(id, cb) {
    getCommentFromFile((comments) => {
      const comment = comments.filter((comment) => comment.id === id);
      cb(comment);
    });
  }
};

