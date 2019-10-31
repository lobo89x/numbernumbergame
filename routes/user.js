const express = require('express');
const router = express.Router();
const User = require("../controllers/userController");
const passport = require('passport');

// const local = require("../passport");

router.post('/signup', (req, res) => {
    User.createUser(req, res);
})

router.post('/login', passport.authenticate('local'), (req, res) => {
      console.log(`logged in: ${req.user}`);
      User.findByUserName(req, res);
      console.log(req.user);
})

router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
})

router.get('/loggedin', (req, res) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        User.findByUserName(req, res);
    } else {
        res.json({ user: null })
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
    if (req.user && {username : username}) {
        User.findByUserName(req, res)
    }      
    else if (!username){
        res.render("Could not find a user by that name.").send();
    }
    else {
        res.status(401).send();
    }
  })
  
  router.get('/allUsers', (req, res) => {
    if (req.user) {
        User.findAllUsers(req, res)
    }      
    else {
        res.status(401).send();
    }
  })
  

module.exports = router