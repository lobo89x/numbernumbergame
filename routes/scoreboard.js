const express = require('express');
const router = express.Router();
const Highscore = require("../controllers/scoreController");

router.put('/score/:userID', (req, res) => {
    if (req.user){
      Highscore.updateHighscore(req, res);
    }
    else {
        res.status(401).send();
    }
})

router.get(
  '/leaderboard', (req, res) => {
      if (req.user){
        Highscore.findAllHighscores(req, res);
      }
      else {
          res.status(401).send();
      }
})

router.get(
  '/topHundred', (req, res) => {
      if (req.user){
        Highscore.findTopHundredHighscores(req, res);
      }
      else {
          res.status(401).send();
      }
})

router.get(
  '/topTen', (req, res) => {
      if (req.user){
        Highscore.findTopTenHighscores(req, res);
      }
      else {
          res.status(401).send();
      }
})

module.exports = router