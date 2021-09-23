const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/admin')

router.get('/', AdminController.index)
router.get('/teste', (req, res) => {
    res.send('teste')
})
router.get('/novo', (req, res) => {
    res.send('hello')
})

module.exports = router