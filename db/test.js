const FirstSpouses = require('../models/FirstSpouse')
const Presidents = require('../models/President')

FirstSpouses.find({})
    .populate('partner')
    .then(spouses => spouses.forEach( (spouse) => {
        console.log(spouse.partner)
    }))


Presidents.find({})
    .populate('partner')
    .then(pres => pres.forEach( (p) => {
        console.log(p)
    }))
