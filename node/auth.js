var jwt    = require('jwt-simple')
var config = require('./config')

module.exports = function () {
  return function (req, res, next) {
    if (req.headers.authorization) {
      var token = req.headers.authorization.split(' ')
      var payload = jwt.decode(token[1], config.secretKet)
      console.log(payload)
    }
    next()
  }
}
