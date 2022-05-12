const router = require('express').Router();
const userRoutes=require ('./userRoutes');
const thoughtRoutes=require('./thoughtRoutes');
const reactionRoutes=require('./reactionRoutes');

router.use('/reaction', reactionRoutes);
// Add `/users` to created routes 
router.use('/user', userRoutes);

// Add `/thoughts` to created routes 
router.use('/thought', thoughtRoutes);

// Export Module Router
module.exports = router;