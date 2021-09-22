const Post = require('../models/post')

const status = [
    "Rascunho",
    "Publicado"
]

const index = async (req, res) => {
    res.render('post/index')
}

const create = async (req, res) => {
    res.render('post/create', { status })
}

const store = async (req, res) => {
    const post = Post(req.body)
    try {
        post.save()
        res.render('post/index')
    } catch (e) {
        res.send('Deu erro')
    }
}

module.exports = {
    index,
    create,
    store
}