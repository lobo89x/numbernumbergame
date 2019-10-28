const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'))

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const server = app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});

// socketio related stuff
//const socket = require("./socket/config");
//socket(server); 



