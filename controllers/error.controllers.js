exports.getError = (req, res) => {
    const error = { title: "Error", message: "Not Found"}
    res.render("error", {
      pageTitle: error.title,
      error
    })
  };