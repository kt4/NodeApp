require('dotenv').config();


const {config, engine} = require('express-edge')

const express = require('express')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const expressSession = require('express-session')

const connectMongo = require('connect-mongo')

const connectFlash = require('connect-flash')

const edge = require('edge.js');

const createPostController = require('./controllers/createPost')

const homePageController = require('./controllers/homePage')

const storePostController = require('./controllers/storePost')

const getPostController = require('./controllers/getPost')

const createUserController = require("./controllers/createUser")

const storeUserController = require("./controllers/storeUser")

const loginController = require("./controllers/login")

const loginUserController = require("./controllers/loginUser")

const auth = require("./middleware/auth")

const redirectIfAuthenticated = require("./middleware/redirectIfAuthenticated")

const logoutController = require("./controllers/logout")

const app = new express()

mongoose.connect('mongodb://localhost/blog')

app.use(connectFlash());

const mongoStore = connectMongo(expressSession);

app.use(expressSession({

  secret: process.env.EXPRESS_SESSION_KEY,
  
  store: new mongoStore({

    mongooseConnection: mongoose.connection

  })

}))

mongoose.connect(process.env.DB_URI)


app.use(express.static('public'))

app.use(engine)

app.set('views', `${__dirname}/views`)

app.use('*', (req, res, next) => {

  edge.global('auth', req.session.userId)

  next()

})

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true}))

app.use


const storePost = require("./middleware/storePost")


app.get('/', homePageController);

app.get('/auth/register', redirectIfAuthenticated, createUserController);

app.post('/users/register', redirectIfAuthenticated, storeUserController);

app.get('/auth/login', redirectIfAuthenticated, loginController);

app.post('/users/login', redirectIfAuthenticated, loginUserController);

app.get('/posts/new', auth, createPostController);

app.get('/auth/logout', auth, logoutController)

app.post('/posts/store', auth, storePost, storePostController);

app.get('/post/:id', getPostController);

app.use('/posts/store', storePost);

app.use((req, res) => res.render('notfound'));

app.listen(process.env.PORT, () => {

})
