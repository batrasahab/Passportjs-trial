const express = require('express')
const session = require('express-session')
const passport = require('./passport')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'secret',
    saveUninitialized: false,
    resave: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'hbs')

app.use('/user',require('./routes/user'))
app.use('/pages',require('./routes/pages'))

app.get('/',(r,s) => {s.render('index')})

app.listen(4000,()=> {
    console.log('server listening to port 4000')
})
