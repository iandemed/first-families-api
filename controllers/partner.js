const Partner = require('../models/Partner')

module.exports ={
    index: (req, res) => {
        Partner.find({})
            .then(partners => {
                res.json(partners)
            })
    },
    showId: (req, res) => {
        Partner.findById(req.params.id)
            .then(partner => {
                res.json(partner)
            })
    } ,
    create: (req, res) => {
        Partner.create(req.body)
            .then(partner => {
                res.json(partner)
            })
    },
    editById: (req,res) => {
        Partner.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(partner => {
                res.json(partner)
            })
    },
    deleteById: (req, res) => {
        Partner.findOneAndDelete({_id: req.params.id}, req.body)
            .then(partner => {
                res.json(partner)
            })
    }
}