var router = require('express').Router()
var auth   = require('../../auth')

router.use(auth())

router.get('/user', function (req, res) {
  if (req.user) {
    res.json(req.user)
  } else {
    res.send(401)
  }
})

module.exports = router
