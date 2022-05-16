const router= require('express').Router();

const {
    getThoughts,
    getThought,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction } = require('../../controllers/thoughtController')

router.route('/').get(getThoughts)
router.route("/").get(getThoughts).post(addThought);
router.route("/:thoughtId").get(getThought).put(updateThought).delete(deleteThought);
router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);


module.exports= router;

