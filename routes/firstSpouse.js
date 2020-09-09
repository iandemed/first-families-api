const express = require('express')
let router = new express.Router()
const firstSpouseController = require('../controllers/firstSpouse')

router.get('/', firstSpouseController.index)
router.get('/:id', firstSpouseController.showId)

module.exports = router