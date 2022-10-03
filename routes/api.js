// Required dependencies
// const notes = require('express').Router();
// const {v4 : uuidv4} = require("uuid")
// const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// notes.get('/', (req, res) =>
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
// );

// // POST Route for submitting feedback
// notes.post('/', (req, res) => {
//   // Destructuring assignment for the items in req.body
//   const { title, text } = req.body;

//   // If all the required properties are present
//   if (title && text) {
//     // Variable for the object we will save
//     const newNote = {
//       title,
//       text,
//       note_id: uuidv4(),
//     };

//     readAndAppend(newNote, './db/db.json');

//     const response = {
//       status: 'success',
//       body: newNote,
//     };

//     res.json(response);
//   } else {
//     res.json('Error in posting note');
//   }
// });


const notes = require('express').Router();
// npm package for creation of unique IDs
const {v4 : uuidv4} = require("uuid")
const fs = require ('fs');

// npm package for creation of unique IDs


// GET /api/notes should read db.json file and then return all of the saved notes as JSON
notes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));
});

// POST /api/notes should get a new note to save on the request body
// It should add the new note to the db.json file, and then return the new note to the client
notes.post('/', (req, res) => {
  let db = fs.readFileSync('db/db.json');
  db = JSON.parse(db);
  res.json(db);
  // Creates the body of the notes
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    // Creates unique ID for each of the created notes
    id: uuidv4()
  };
  db.push(newNote);
  fs.writeFileSync('db/db.json', JSON.stringify(db));
  res.json(db);
});

module.exports = notes;
