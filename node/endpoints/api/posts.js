var router = require('express').Router()
var models = require('../../models')
var auth   = require('../../auth')

router.get('/', function (req, res, next) {
  models.Post.find()
  .sort('-_id')
  .exec(function (err, posts) {
    if (err) { return next(err) }
    res.json(posts)
  })
})

router.use(auth)

router.post('/', function (req, res, next) {
  var post = new models.Post(req.body.post)
  post.user_id  = req.user._id
  post.username = req.user.username
  post.save(function (err) {
    if (err) { return next(err) }
    res.json(post)
  })
})

module.exports = router
