const President = require('../models/President')

module.exports ={
    index: (req, res) => {
        President.find({})
            .populate('partner')
            .then(presidents => {
                res.json(presidents)
            })
    },
    showId: (req, res) => {
        President.findById(req.params.id)
            .populate('partner')
            .then(president => {
                res.json(president)
            })
    },
    create: (req, res) => {
        President.create(req.body)
            .then(president => {
                res.json(president)
            })
    },
    editById: (req,res) => {
        President.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(president => {
                res.json(president)
            })
    },
    deleteById: (req, res) => {
        President.findOneAndDelete({_id: req.params.id}, req.body)
            .then(president => {
                res.json(president)
            })
    }
}