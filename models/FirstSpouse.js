const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const FirstSpouse = new Schema({
    _id: String,
    name: String,
    /* The primary purpose of this project is to get biographical information on all of the presidents,
     and their direct descendants. Therefore there would not be any partner unless it was in relation to
     the president or one of their children. */
    partner: {type: [{type: String, ref: "President"}],
              required: true}, 
    born: {type: Date, required: true},
    died: Date,
})

module.exports = mongoose.model('FirstSpouse', FirstSpouse)