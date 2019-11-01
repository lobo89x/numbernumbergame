const db = require("../models/index");

module.exports = {
    createHighscore: function(id) {
        console.log(db, "dbscore")
       return db.Highscore
          .create({userID : id })
          .catch(err => res.status(422).json(err));
    },

    updateHighscore: function(req, res) {
        console.log(db, "dbscore")
      return db.Highscore
        .findOneAndUpdate({ _id: req.params.id }, { highscore: req.body.highscore }, {new : true}).populate("username")
        .then(dbModel => {
            res.json(dbModel);
            console.log(`new highscore!`);
        })
        .catch(err => res.status(422).json(err));
    }, 

    findAllHighscores: function(req, res) {
        db.Highscore
          .find({}).populate("userID", "username").sort({highscore: -1})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
};