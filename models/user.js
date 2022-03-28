const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.pre('save', function(next) {
    const user = this
    if(!user.isModified('password')) {
        return next()
    }

    bcrypt.genSalt((err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash
            next()
        })
    })
})

UserSchema.methods.checkPassword = function (password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, (err, check) => {
            if (check) {
                resolve(check)
            } else {
                reject(err)
            }
        })
    })
}

const User = mongoose.model('User', UserSchema)

module.exports = User