const { thought } = require("../models");

module.exports = {
  //get all the thoughts
  getThoughts(req, res) {
    thought.find()
      .then((thoughts) => {
        res.json(thoughts);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then( async (thought) => 
        !thought
            ? res.status(404).json({ message: 'No thought with that ID'})
            : res.json(thought)
      )
  },
  addThought(req, res) {
    Thought.create(req.body)
    .then((thought) => 
    User.findOneAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { thoughts: thought._id }},
      { runValidators: true, new: true })
    )
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err))
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
  )
  .then((thought) =>
  !thought
    ? res.status(404).json({ message: 'No thought has that ID.'})
    : res.json(thought)
  )
  .catch((err) => res.status(500).json(err));

  },
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId})
      .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought has that ID.'})
        : User.findOneAndUpdate(
          { username: thought.username},
          { $pull: { thoughts: req.params.thoughtId }},
          { new: true }
          )
      )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
  )
  .then((thought) =>
  !thought
    ? res.status(404).json({ message: 'No thought has that ID.'})
    : res.json(thought)
  )
  .catch((err) => res.status(500).json(err));
  },
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId},
      { $pull: { reactions: { _id: req.params.reactionId }}},
      { new: true},
    )
    .then((thought) =>
  !thought
    ? res.status(404).json({ message: 'No thought has that ID.'})
    : res.json(thought)
  )
  .catch((err) => res.status(500).json(err));
}
};