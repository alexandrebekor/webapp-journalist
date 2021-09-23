// Database
const mongoose = require('mongoose')
const mongo = process.env.DATASE || 'mongodb://localhost/webapp-journalist'
mongoose.Promise = global.Promise

// Server
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Session
const session = require('express-session')
app.use(session({ secret: 'agencybekor', resave: false, saveUninitialized: true }))

// Template
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Assets
app.use(express.static('public'))

app.use((req, res, next) => {
    if('user' in req.session) {
        res.locals.user = req.session.user
    }
    next()
})

// Routing
const PageRouter = require('./routes/page')
const PostRouter = require('./routes/post')
const AdminRouter = require('./routes/admin')
const AdminController = require('./controllers/admin')
app.use('/', PageRouter)
app.use('/artigos', PostRouter)
app.use('/admin', AdminController.logged)
app.use('/admin', AdminRouter)

const userModel = require('./models/user')
const createInitialUser = async () => {
    const totalUsers = await userModel.count({ username: 'bekor' })
    if(totalUsers === 0){
        const user = userModel({ username: 'bekor', password: '12345' })
        try {
            await user.save()
            console.log('added')
        } catch(e) {
            console.log(e)
        }
    }
}

mongoose
    .connect(mongo)
    .then(() => {
        createInitialUser()
        app.listen(port, () => console.log('Server running on port ' + port))
    })
    .catch(e => console.log(e))
