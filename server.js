// Get dependencies
const passport = require ("./passport");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 5000; 

const routes = require("./routes/user");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
 
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
 
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);



//Connect to mongoDB
const url = "mongodb://localhost:27017/numbernumbergame";

mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
});

// Start the server
app.listen(PORT, function() {
  console.log(`Server running on port ${PORT}.`);
});