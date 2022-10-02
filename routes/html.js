// Dependencies necessary
const express = require('express');
const router = express.Router();
const path = require("path");


// GET Route for homepage
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

// GET route for notes
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;