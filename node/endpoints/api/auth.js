var router = require('express').Router()
var bcrypt = require('bcrypt')
var jwt    = require('jwt-simple')
var models = require('../../models')
var config = require('../../config')

router.post('/', function (req, res, next) {
  models.User.findOne({username: req.body.username}, function (err, user) {
    if (err || !user)   { return res.send(401) }
    bcrypt.compare(req.body.password, user.passwordHash, function (err, valid) {
      if (err || !valid) { return res.send(401) }
      var token = jwt.encode({userId: user._id}, config.secretKey)
      res.json({
        user:  { username: user.username },
        token: token
      })
    })
  })
})

module.exports = router
