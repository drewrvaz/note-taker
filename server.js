const express = require("express");
const path = require("path");

// Creates the port for the environment
const PORT = process.env.PORT || 3001;

// App uses express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Creates a route for every file in the public folder
// app.use(express.static("public"));
app.use('/', express.static(path.join(__dirname, '/public')));

// Routes
app.use('/api', require('./routes/api'));
app.use('/html', require('./routes/html'));

// app listener - starts the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);