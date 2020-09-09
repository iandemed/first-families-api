const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const President = new Schema({
    _id: String,
    name: String,
    partner: {type: [{type: String, ref: "Partner"}],
              default: undefined},
    born: Date,
    died: Date,
    tenure: Number
})

module.exports = mongoose.model('President', President)