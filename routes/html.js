// Dependencies necessary
const path = require("path");
const router = require("express").Router();

// GET Route for homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

// GET route for notes
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"))
});

module.exports = router;