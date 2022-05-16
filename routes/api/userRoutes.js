const router = require('express').Router();

// Set requirements 
const { getUsers, getSingleUser, addUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend } = require('../../controllers/userController')

router.route('/').get(getUsers)
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

  module.exports=router;