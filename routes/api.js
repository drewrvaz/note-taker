// Required dependencies
const path = require ('path');
const fs = require ('fs');

// npm package for creation of unique IDs
var uniqid = require('uniqid');

// GET /api/notes should read db.json file and then return all of the saved notes as JSON
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));
});

// POST /api/notes should get a new note to save on the request body
// It should add the new note to the db.json file, and then return the new note to the client
app.post('/api/notes', (req, res) => {
  let db = fs.readFileSync('db/db.json');
  db = JSON.parse(db);
  res.json(db);
  // Creates the body of the notes
  let userNote = {
    title: req.body.title,
    text: req.body.text,
    // Creates unique ID for each of the created notes
    id: uniqid()
  };
  db.push(userNote);
  fs.writeFileSync('db/db.json', JSON.stringify(db));
  res.json(db);
});

module.exports = app;