const express = require("express");
const path = require("path"); 

// Creates the port for the environment
const PORT = process.env.PORT || 3001;

// App uses express
const app = express();
const fs = require ('fs');

// npm package for creation of unique IDs
const {v4 : uuidv4} = require("uuid")

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Creates a route for every file in the public folder
// app.use(express.static("public"));
app.use('/', express.static(path.join(__dirname, '/public')));

// GET Route for homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

// GET route for notes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// GET /api/notes should read db.json file and then return all of the saved notes as JSON
router.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));
});

// POST /api/notes should get a new note to save on the request body
// It should add the new note to the db.json file, and then return the new note to the client
router.post('/api/notes', (req, res) => {
  let db = fs.readFileSync('db/db.json');
  db = JSON.parse(db);
  res.json(db);
  // Creates the body of the notes
  let userNote = {
    title: req.body.title,
    text: req.body.text,
    // Creates unique ID for each of the created notes
    id: uuidv4()
  };
  db.push(userNote);
  fs.writeFileSync('db/db.json', JSON.stringify(db));
  res.json(db);
});

// Routes
// app.use('/api', require('./routes/api'));
// app.use('/html', require('./routes/html'));

// app listener - starts the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);