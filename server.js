// Required dependencies
const express = require('express');
const path = require('path'); 
const api = require('./routes/api')

// Creates the port for the environment
const PORT = process.env.PORT || 3001;

// App uses express
const app = express();
 
// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/api', api);

// Creates a route for every file in the public folder
app.use(express.static('public'));

// GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// GET Route for homepage
app.get('*', (req, res) => 
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// app listener - starts the server 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);