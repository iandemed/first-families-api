const President = require('../models/President')
const presidentData = require('./presidents.json')

President.deleteMany({}).then(
    President.create(presidentData)
        .then(() => {
            console.log(presidentData)
        })
        .catch(err => {
            console.log("Failed to seed data.", err)
        })
)