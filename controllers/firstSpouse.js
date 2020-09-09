const FirstSpouse = require('../models/FirstSpouse')

module.exports ={
    index: (req, res) => {
        FirstSpouse.find({})
            .then(spouses => {
                res.json(spouses)
            })
    },
    showId: (req, res) => {
        FirstSpouse.findById(req.params.id)
            .then(spouse => {
                res.json(spouse)
            })
    } ,
    create: (req, res) => {
        FirstSpouse.create(req.body)
            .then(spouse => {
                res.json(spouse)
            })
    },
    editById: (req,res) => {
        FirstSpouse.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(spouse => {
                res.json(spouse)
            })
    },
    deleteById: (req, res) => {
        FirstSpouse.findOneAndDelete({_id: req.params.id}, req.body)
            .then(spouse => {
                res.json(spouse)
            })
    }
}