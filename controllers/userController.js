const { ObjectId } = require("mongoose").Types;
const { user } = require('../models')

const friendCount = async () => 
    user.aggregate([
        { "$project": {
            "Count": { 
                "$size": { "$ifNull": [ "$friends", [] ] }
            }
        }}
      ])


module.exports = {
  // get all users
  getUsers(req, res) {
    user.find()
        .then(async (users) => {
            const userObj = {
                users,
                // friends: await friendCount(users)
            }
            console.log(userObj);
            return res.json(userObj)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err)
        })
  },
  getSingleUser(req, res) {
      user.findOne({ _id: req.params.userId })
      .then( async (user) => 
        !user
            ? res.status(404).json({ message: 'No user found with that ID'})
            : res.json({
                user,
                friendCount: await friendCount()
            })
      )
  },
  addUser(req, res) {
    user.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err))
},
updateUser(req, res) {
    user.findOneAndUpdate(
        { _id: ObjectId(req.params.userId) },
        { $set: req.body },
        { runValidators: true, new: true }
    )
    .then((user) =>
    !user
      ? res.status(404).json({ message: 'No user has that ID.'})
      : res.json(user)
    )
    .catch((err) => res.status(500).json(err));

},
deleteUser(req, res) {
    user.findOneAndDelete({ _id: req.params.userId})
    .then((user) =>
    !user
      ? res.status(404).json({ message: 'No user has that ID.'})
      : res.json(user)
    )
    .catch((err) => res.status(500).json(err));

},
addFriend(req, res) {  
  user.findOne({ _id: req.params.friendId})
      .then((friend) => 
      !friend
          ? res.status(404).json({ message: 'No user has that ID.' })
          :user.findOneAndUpdate(
          { _id: req.params.userId},
          { $addToSet: { friends: friend }},
          { runValidators: true, new: true }
      ))
      .then((user) => res.json({ message: 'friend added!' }))
      .catch((err) => res.status(500).json(err));
},
removeFriend(req, res) {
    user.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user has that ID." })
          : res.json({ message: "friend removed!" })
      )
      .catch((err) => res.status(500).json(err));
  },
};

// module.exports = userController;