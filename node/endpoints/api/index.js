var router = require('express').Router()

router.use('/posts', require('./posts'))
router.use('/user', require('./user'))
router.use('/users', require('./users'))
router.use('/auth', require('./auth'))

module.exports = router
