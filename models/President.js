const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const President = new Schema({
    name: String,
    partner: String,
    born: Date,
    died: Date,
    tenure: Number
})

module.exports = mongoose.model('President', President)