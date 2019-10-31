const db = require("../models");

module.exports = {
    createHighscore: function(req, res) {
        db.User
          .create(req._id)
          .then(dbModel => res.json(dbModel))
          .populate("highscore")
          .catch(err => res.status(422).json(err));
    },

    findByHighscore: function(req, res) {
      db.Scoreboard
        .find({}).populate("User").sort({highscore: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    updateHighscore: function(req, res) {
      db.Scoreboard
        .findOneAndUpdate({ _id: req.params.id }, { highscore: req.body.highscore })
        .then(dbModel => {
            res.json(dbModel);
            console.log(`new highscore!`);
        })
        .catch(err => res.status(422).json(err));
    }
};