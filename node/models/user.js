var db = require('../mongo')

var User = db.model('User', {
  username:     { type: String, required: true },
  passwordHash: { type: String, required: true }
})

module.exports = User
