const express = require('express')
let router = new express.Router()

/* Import controller so that we are able to set the root to return all of the presidents */
const presidentController = require('../controllers/president')

router.use('/president', require('./president'))
router.use('/firstSpouse', require('./firstSpouse'))
router.get('/', presidentController.index)

module.exports = router