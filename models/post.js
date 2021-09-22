const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: String,
    status: String
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post