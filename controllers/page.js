const index = async (req, res) => {
    res.render('index')
}

const login = async (req, res) => {
    res.render('login')
}

module.exports = {
    index,
    login
}