const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Partner = new Schema({
    _id: String,
    name: String,
    partner: [{type: String, ref: "President"}],
    born: Date,
    died: Date,
})

module.exports = mongoose.model('Partner', Partner)