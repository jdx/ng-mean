var jwt    = require('jwt-simple')
var config = require('./config')
var models = require('./models')

module.exports = function (req, res, next) {
  if (req.headers.authorization) {
    var token = req.headers.authorization.split(' ')
    var payload = jwt.decode(token[1], config.secretKey)
    models.User.findOne(payload.userId, function (err, user) {
      if (err) { return next(err) }
      req.user = user
      return next()
    })
  } else {
    res.send(401)
  }
}
