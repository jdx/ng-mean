var router = require('express').Router()

router.use(require('./posts'))
router.use(require('./user'))
router.use(require('./users'))
router.use(require('./auth'))

module.exports = router
