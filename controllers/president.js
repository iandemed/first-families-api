const President = require('../models/President')

module.exports ={
    index: (req, res) => {
        President.find({})
            .then(presidents => {
                res.json(presidents)
            })
    }
}