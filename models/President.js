const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const President = new Schema({
    _id: String,
    name: String,
    partner: {type: [{type: String, ref: "Partner"}],
              default: undefined}, // Arrays that are not included are left as empty unless specified otherwise
    born: {type: Date, required: true},
    died: Date,
    tenure: Number
})

module.exports = mongoose.model('President', President)