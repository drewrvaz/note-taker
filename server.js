const express = require("express");
const path = require("path");

// Creates the port for the environment
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true}));

app.use(express.json());
app.use(express.static("public"));

// GET route for notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'))
})

// GET route for homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});

// GET route for saved notes
app.get('/api/notes', (req, res) => {
  res.send
})

// app listener - starts the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);