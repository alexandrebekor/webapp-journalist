const express = require('express')
const router = express.Router()
const PageController = require('../controllers/page')

router.get('/', PageController.index)
router.get('/entrar', PageController.login)


module.exports = router