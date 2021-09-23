const Post = require('../models/post')

const status = [
    "Rascunho",
    "Publicado"
]

const index = async (req, res) => {
    res.render('post/index')
}

const show = async (req, res) => {
    const posts = await Post.find({ status: 'Publicado' })
    res.render('post/list', { posts })
}

const create = async (req, res) => {
    res.render('post/create', { status })
}

const store = async (req, res) => {
    const post = Post(req.body)
    try {
        await post.save()
        res.render('post/index')
    } catch (e) {
        res.send('Deu erro')
    }
}

module.exports = {
    index,
    show,
    create,
    store
}