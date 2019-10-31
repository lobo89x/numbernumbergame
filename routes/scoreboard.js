const express = require('express');
const router = express.Router();
const Highscore = require("../../controllers/scoreController");

router.post('/score', (req, res) => {
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
        Highscore.findByHighscore(req, res);
      }
      else {
          res.status(401).send();
      }
})

module.exports = router