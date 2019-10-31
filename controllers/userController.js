const db = require("../models/index");
module.exports = {
  findAllUsers: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  setScoreID: function (userID, scoreID) {
    return db.User
    .findOneAndUpdate({_id : userID}, {highscore : scoreID}, {new : true}).populate("Highscore")
  },

  findByUserName: function(req, res) {
    db.User
      .findOne({username: req.body.username})
      .populate("Highscore")
      .then(dbModel => 
        {
          console.log(dbModel)
          res.json(dbModel)
        })
      .catch(err => res.status(422).json(err));
  },

  findUserById: function(req, res) {
    db.User
    //use req.user.id value provided by passport
      .findOne({_id: req.params.id})
      .populate("Highscore")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createUser: function(req, res) {
    return db.User
    .create(req.body)
    .catch(err => res.status(422).json(err));
  },

  updateUser: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};