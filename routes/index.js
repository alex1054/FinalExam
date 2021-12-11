//const { response } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Getting all
router.get('/', (req, res) => {
    res.render('index', { name: 'Alex' })
})
// Creating one
router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {

})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {

})

router.get('/search', (req, res) => {
    const word = req.body.word
    const data = req.body.data
    res.render('search', { defWord: word, def: data })
})

router.post('/search', (req, res) => {
    const word = req.body.word
    const data = req.body.data
    res.render('search', { defWord: word, def: data.shortdef })
})

module.exports = router