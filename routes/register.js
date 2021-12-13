const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passwordValidator = require('password-validator')

var schema = new passwordValidator()

schema
.is().min(8)

router.get('/', (req, res) => {
    res.render('register', { user: new User() })
})

router.post('/', async (req, res) => {

    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    
    try {
        schema.validate(password) === true
        const newUser = await user.save()
        res.redirect('/search')
    } catch {
        res.render('register', {
            user: user, 
            errorMessage: 'Password must be a minimum of 8 characters.'
        })
    }
})

module.exports = router