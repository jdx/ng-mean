var router = require('express').Router()

router.use(require('./posts'))
router.use(require('./users'))

module.exports = router
