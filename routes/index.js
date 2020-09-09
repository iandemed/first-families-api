const express = require('express')
let router = new express.Router()

router.use('/president', require('./president'))

module.exports = router