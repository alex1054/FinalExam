//const { response } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Getting all
router.get('/', (req, res) => {
    res.render('index.ejs')
})
// Creating one
router.get('/login', (req, res) => {
    res.render('login.ejs')
})

router.post('/login', (req, res) => {

})

router.get('/register', (req, res) => {

})

router.post('/register', (req, res) => {

})

module.exports = router