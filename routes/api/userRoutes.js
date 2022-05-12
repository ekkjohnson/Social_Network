const router = require('express').Router();

// Set requirements (from userController)
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controllers/userController');

  //directs to api users get and post
  router.route('/').get(getAllUsers).post(createUsers);
  //directs to api users id get, put, and delete
  router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);
  //directs to api users userid friends friend id post and delete
  router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

  module.exports=router;