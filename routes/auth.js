const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/auth')

router.use((req, res, next) => {
    if('user' in req.session) {
        res.locals.user = req.session.user
    }
    next()
})

router.post('/entrar', AuthController.login)
router.get('/sair', AuthController.logout)

module.exports = router