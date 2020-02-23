const router = require('express').Router()
const controller = require('./controller')

router.get('/all', controller.getAllLanguages)
router.get('/config', controller.getConfig)
router.get('/:language', controller.getLanguage)

module.exports = router