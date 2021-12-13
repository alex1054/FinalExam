//const { response } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Getting all
router.get('/', (req, res) => {
    res.render('index', { name: 'Alex' })
})
// Display login
// router.get('/login', (req, res) => {
//     res.render('login')
// })

// Validate login credentials -> does not work
// router.post('/login', async (req, res) => {

//     const email = req.body.email
//     const password = req.body.password
//     const options = { email: email, password: password }

//     try {
//         const user = await User.find(options)
//         res.redirect('/search')
//     } catch {
//         res.render('login', {
//             errorMessage: 'Email or password is incorrect'
//         })
//     }
// })

// router.get('/register', (req, res) => {
//     res.render('register', { user: new User() })
// })

// router.post('/register', async (req, res) => {
    // const password = req.body.password

    // if (password.length < 8) {
    //     res.render('/register', {
    //         errorMessage: 'Password must be more than 8 characters in length.'
    //     })
    // }

//     const user = new User({
//         email: req.body.email,
//         password: req.body.password
//     })

//     try {
//         const newUser = await user.save()
//         res.redirect('/search')
//     } catch {
//         res.render('register', {
//             user: user, 
//             errorMessage: 'Error creating user'
//         })
//     }
// })

// router.get('/search', (req, res) => {
//     res.render('search', { defWord: '', def: '' })
// })

// router.post('/search', (req, res) => {
//     const word = req.body.word
//     const data = req.body.data
//     res.render('search', { defWord: word, def: data.shortdef })
// })

module.exports = router