const route = require('express').Router()
const user = require('../db/models').user
const passport = require('../passport')

route.get('/signin',(r,s) => {s.render('signin')})
route.get('/signup',(r,s) => {s.render('signup')})

route.post('/signin',(r,s) => {
    passport.authenticate('ls', {
        successRedirect : '/pages/profile',
        failureRedirect: '/user/signin'
    })
})

route.post('/signup',(r,s) => {
    user.create({
        username: r.body.username,
        password: r.body.password
    }).then((user) => {
        s.redirect('/user/signin')
    })
})

exports = module.exports = route