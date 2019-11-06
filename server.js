// Get dependencies
const passport = require ("./passport");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001; 

const userRoutes = require("./routes/user");
const scoreRoutes = require("./routes/scoreboard");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
 
app.use(passport.initialize());
app.use(passport.session());

// app.use(express.static('public'))

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Connect to mongoDB
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/numbernumbergame";

mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
});

app.use(userRoutes);
app.use(scoreRoutes);

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the server
const server = app.listen(PORT, function() {
  console.log(`Server running on port ${PORT}.`);
});

// socketio related stuff
const socket = require("./socket/config");
socket(server);
 



