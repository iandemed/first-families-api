const express = require('express')
let router = new express.Router()
const presidentController = require('../controllers/president')

router.get('/', presidentController.index)
router.get('/:id', presidentController.showId)

module.exports = router