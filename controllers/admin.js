const User = require('../models/user')

const login = async (req, res) => {
    const user = await User.findOne({ username: req.body.username })
    if(user) {
        const isValid = await user.checkPassword(req.body.password).catch(e => {})
        if(isValid) {
            req.session.user = user
            res.redirect('/admin')
        } else {
            res.redirect('/entrar')
        }
    } else {
        res.redirect('/entrar')
    }
}

const logged = async (req, res, next) => {
    if('user' in req.session) {
        return next()
    } else {
        res.redirect('/entrar')
    }
}

const index = async (req, res) => {
    res.render('admin/index')
}

module.exports = {
    login,
    logged,
    index
}