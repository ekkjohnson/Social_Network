const router = require('express').Router();

const{
    addReaction,
    deleteReaction

} = require('../../controllers/reactionController');

// router.route('/').get(getAllReactions);
//directs to thoughtid reactions post
router.route('/:thoughtId/reactions').post(addReaction);
//directs to delte thought id reactions
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports=router;