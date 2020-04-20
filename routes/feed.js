const express = require('express')
const feedController = require('../controller/feed')
const router = express.Router()

// GET /feed/getAll
router.get('/getAll', feedController.getPosts)

// GET /feed/getOne
router.get('/getOne/:id', feedController.getOne)

// POST /feed/addPost
router.post('/addPost', feedController.createPost)

// PUT /feed/updateOne
router.put('/updateOne/:id', feedController.updateOne)

// PUT /feed/updateOne
router.delete('/deleteOne/:id', feedController.deleteOne)



module.exports = router
