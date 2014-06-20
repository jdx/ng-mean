var router = require('express').Router()
var models = require('../../models')

router.get('/posts', function (req, res, next) {
  models.Post.find(function (err, posts) {
    if (err) { return next(err) }
    res.json(posts)
  })
})

router.post('/posts', function (req, res, next) {
  var post = new models.Post(req.body.post)
  post.save(function (err) {
    if (err) { return next(err) }
    res.json(post)
  })
})

module.exports = router
