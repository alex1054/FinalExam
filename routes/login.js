const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Display login
router.get('/', (req, res) => {
    res.render('login')
})

// Validate login credentials -> does not work
router.post('/', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
        const user = await User.find({ email: email, password: password })
        res.redirect('/search')
    } catch {
        res.render('login', {
            errorMessage: 'Email or password is incorrect'
        })
    }
})

module.exports = router

