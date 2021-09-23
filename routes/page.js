const express = require('express')
const router = express.Router()
const PageController = require('../controllers/page')
const AdminController = require('../controllers/admin')

router.get('/', PageController.index)

// Login
router.get('/entrar', PageController.login)
router.post('/entrar', AdminController.login)

module.exports = router