const { ObjectId } = require("mongoose").Types;
const { User } = require('../models')

const friendCount = async () => 
    User.aggregate([
        { "$project": {
            "Count": { 
                "$size": { "$ifNull": [ "$friends", [] ] }
            }
        }}
      ])


module.exports = {
  // get all users
  getUsers(req, res) {
    User.find()
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
      User.findOne({ _id: req.params.userId })
      .then( async (user) => 
        !user
            ? res.status(404).json({ message: 'No user found with that ID'})
            : res.json({
                user,
                friendCount: await friendCount()
            })
      )
  }
};

// module.exports = userController;