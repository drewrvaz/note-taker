const express = require("express");
const path = require("path");

// Consts for routes
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

// Creates the port for the environment
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true}));

app.use(express.json());
app.use(express.static("public"));

// app listener - starts the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);