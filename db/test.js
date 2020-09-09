const Partners = require('../models/Partner')
const Presidents = require('../models/President')

Partners.find({})
    .populate('partner')
    .then(partners => partners.forEach( (partner) => {
        console.log(partner.partner)
    }))


Presidents.find({})
    .populate('partner')
    .then(pres => pres.forEach( (p) => {
        console.log(p)
    }))
