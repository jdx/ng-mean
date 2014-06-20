var router = require('express').Router()
var models = require('../../models')

router.get('/users', function (req, res, next) {
  models.User.find(function (err, users) {
    if (err) { return next(err) }
    res.json(users)
  })
})

router.post('/users', function (req, res, next) {
  var user = new models.User(req.body.user)
  user.save(function (err) {
    if (err) { return next(err) }
    res.json(user)
  })
})

module.exports = router
