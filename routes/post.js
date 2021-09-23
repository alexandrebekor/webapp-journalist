const express = require('express')
const router = express.Router()
const PostController = require('../controllers/post')

router.get('/', PostController.index)
router.get('/lista', PostController.show)
router.get('/add', PostController.create)
router.post('/add', PostController.store)

module.exports = router