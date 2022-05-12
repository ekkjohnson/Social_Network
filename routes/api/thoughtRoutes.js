const router= require('express').Router();

const{
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts  
}=require('../../controllers/thoughtController');

//get api thought
router.route('/').get(getAllThoughts);
//get, put, delete for api/thoughts/id
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 
//post for api/thoughts/userId
router.route('/:userId').post(createThoughts);

module.exports= router;

