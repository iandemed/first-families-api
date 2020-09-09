const Presidents = require('../models/President')
const presidentData = require('./presidents.json')

const Partners = require('../models/Partner')
const partnerData = require('./partners.json')

Presidents.deleteMany({}).then(
    Presidents.create(presidentData)
        .then(() => {
            console.log(presidentData)
        })
        .catch(err => {
            console.log("Failed to seed data.", err)
        })
)

Partners.deleteMany({}).then(
    Partners.create(partnerData)
        .then(() => {
            console.log(partnerData)
        })
        .catch(err => {
            console.log("Failed to seed data.", err)
        })
)