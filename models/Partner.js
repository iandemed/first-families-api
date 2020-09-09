const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Partner = new Schema({
    _id: String,
    name: String,
    partner: String,
    born: Date,
    died: Date,
})

module.exports = mongoose.model('Partner', Partner)