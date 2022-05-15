const { thought } = require("../models");

module.exports = {
  //get all thoughts
  getThoughts(req, res) {
    thought.find()
      .then((thoughts) => {
        res.json(thoughts);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};