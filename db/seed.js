
/* Seed our database with the first six presidents and their partners */

const Presidents = require('../models/President')
const presidentData = require('./presidents.json')

const FirstSpouses = require('../models/FirstSpouse')
const spouseData = require('./firstSpouses.json')

Presidents.deleteMany({}).then(
    Presidents.create(presidentData)
        .then(() => {
            console.log(presidentData)
        })
        .catch(err => {
            console.log("Failed to seed data.", err)
        })
)

FirstSpouses.deleteMany({}).then(
    FirstSpouses.create(spouseData)
        .then(() => {
            console.log(spouseData)
        })
        .catch(err => {
            console.log("Failed to seed data.", err)
        })
)