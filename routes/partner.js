const express = require('express')
let router = new express.Router()
const partnerController = require('../controllers/partner')

router.get('/', partnerController.index)
router.get('/:id', partnerController.showId)

module.exports = router