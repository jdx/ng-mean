var router = require('express').Router()
var models = require('../../models')
var bcrypt = require('bcrypt')

router.get('/users', function (req, res, next) {
  models.User.find(function (err, users) {
    if (err) { return next(err) }
    res.json(users)
  })
})

router.post('/users', function (req, res, next) {
  bcrypt.hash(req.body.password, 8, function (err, hash) {
    if (err) { return next(err) }
    var user = new models.User({
      username: req.body.username,
      passwordHash: hash
    })
    user.save(function (err) {
      if (err) { return next(err) }
      res.send(201)
    })
  })
})

module.exports = router
