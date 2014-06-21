var router = require('express').Router()
var models = require('../../models')
var bcrypt = require('bcrypt')

router.get('/', function (req, res, next) {
  models.User.find(function (err, users) {
    if (err) { return next(err) }
    res.json(users)
  })
})

router.get('/:username', function (req, res, next) {
  models.User.findOne({username: req.params.username}, function (err, user) {
    if (err) { return next(err) }
    res.json(user)
  })
})

router.post('/', function (req, res, next) {
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

router.get('/:username/posts', function (req, res, next) {
  models.User.findOne({username: req.params.username}, function (err, user) {
    if (err || !user) { return next(err) }
    models.Post.find({user_id: user._id}, function (err, posts) {
      if (err) { return next(err) }
      res.json(posts)
    })
  })
})

module.exports = router
