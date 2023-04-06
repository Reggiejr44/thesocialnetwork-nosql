const router =require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    addReaction,
    addThought,
    updateThought,
    removeReaction,
    removeThought
} = require('../../controllers/thoughts-control.js')



router
    .route('/')
    .get(getAllThoughts)
    .post(addThought)


router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(removeThought)


router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)
    


module.exports = router
