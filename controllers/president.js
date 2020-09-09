const President = require('../models/President')

module.exports ={
    index: (req, res) => {
        President.find({})
            .then(presidents => {
                res.json(presidents)
            })
    },
    showId: (req, res) => {
        President.findById(req.params.id)
            .then(president => {
                res.json(president)
            })
    } 
}