const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Def = require('../models/definition')
const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"
const apikey = "fc2a6d52-84b1-49e8-af86-a895011f2698"

router.get('/', (req, res) => {
    res.render('search')
})

// save a definition and use definition from database
// if searched in the last 10 minutes 
router.post('/', (req, res) => {
    res.render('search')
})

module.exports = router