const express = require('express')
let router = new express.Router()
const presidentController = require('../controllers/president')

router.get('/', presidentController.index)
router.get('/:id', presidentController.showId)
router.post('/', presidentController.create)
router.put('/:id', presidentController.editById)
router.delete('/:id', presidentController.deleteById)

module.exports = router