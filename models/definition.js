const mongoose = require('mongoose')

const defSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    def: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    }
    //date: {
    //    type: date,
    //    required: true
    //}
})

module.exports = mongoose.model('Definition', defSchema)