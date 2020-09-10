const express = require('express')
let router = new express.Router()
const firstSpouseController = require('../controllers/firstSpouse')

router.get('/', firstSpouseController.index)
router.get('/:id', firstSpouseController.showId)
router.post('/', firstSpouseController.create)
router.put('/:id', firstSpouseController.editById)
router.delete('/:id', firstSpouseController.deleteById)

module.exports = router