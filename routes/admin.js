const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    if('user' in req.session) {
        return next()
    } else {
        res.redirect('/entrar')
    }
})

router.get('/', (req, res) => {
    res.render('admin/index')
})

router.get('/teste', (req, res) => {
    res.send('teste')
})

module.exports = router