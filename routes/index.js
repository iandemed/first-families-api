const express = require('express')
let router = new express.Router()

const presidentController = require('../controllers/president')


router.use('/president', require('./president'))
router.get('/', presidentController.index)

module.exports = router