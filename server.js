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
  app.use(express.static("./client/build"));
}

//Connect to mongoDB
// const url = "mongodb://localhost:27017/numbernumbergame";
//mongodb+srv://proof:<password>@numbernauts01.vrczc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/numbernumbergame";

mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
});


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://proof:iskander1026@numbernauts01.vrczc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//mongodb://heroku_jrn1m0h0:3rq5745equsl3rv98tnk46qdh1@ds033439.mlab.com:33439/heroku_jrn1m0h0

//heroku config:set MONGODB_URI="mongodb+srv://proof:<password>@numbernauts01.vrczc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(userRoutes);
app.use(scoreRoutes);


if(process.env.NODE_ENV === "production"){
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}


// Start the server
const server = app.listen(PORT, function() {
  console.log(`Server running on port ${PORT}.`);
});

// socketio related stuff
const socket = require("./socket/config");
socket(server);
 



