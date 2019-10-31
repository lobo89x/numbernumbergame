const express = require('express');
const router = express.Router();
const User = require("../controllers/userController");
const passport = require('passport');
const Highscore = require("../controllers/scoreController");

router.post('/signup', (req, res) => {
    User.createUser(req, res)
    .then(userModel => Highscore.createHighscore(userModel._id))
    .then(highscoreModel =>User.setScoreID(highscoreModel.userID, highscoreModel._id))
    .then(dbModel => res.json(dbModel))
})

router.post('/login', passport.authenticate('local'), (req, res) => {
      console.log(`logged in: ${req.user}`);
      User.findByUserName(req, res)
      console.log(req.user);
})

router.get('/loggedin', (req, res) => {
    console.log('===== user!!======')
    console.log(`logged in: ${req.user}`);
    if (req.user) {
        dbUser.findByUserName(req, res);
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
})

router.get('/user/:id', (req, res) => {
    console.log(req.params);
    let id = req.params.id;
    if (id) {
        User.findUserById(req, res)
    }      
    else {
        res.render("Could not find a user with that ID.").send();
    }
  })

router.get('/findUser/:username', (req, res) => {
    let username = req.params.username;
    console.log(username);
    if (req.user) {
        if (username){
            User.findByUserName(req, res)
        }
        else {
            res.render("ERROR: Could not find a user by that name.").send(); 
        }
    }
    else {
        res.status(401).send("ACCESS DENIED. ERROR: You are not logged in.");
    }
})
  
  router.get('/allUsers', (req, res) => {
    if (req.user) {
        User.findAllUsers(req, res)
    }      
    else {
        res.status(401).send("ACCESS DENIED. ERROR: You are not logged in.");
    }
  })
  

module.exports = router