const index = async (req, res) => {
    res.render('index')
}

const login = async (req, res) => {
    res.render('login', { message: null })
}

module.exports = {
    index,
    login
}