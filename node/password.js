var bcrypt = require('bcrypt')

function hash (password, cb) {
  bcrypt.hash(password, 8, cb)
}

function compare (password, hash, cb) {
  bcrypt.compare(password, hash, cb)
}

module.exports = {
  hash: hash,
  compare: compare
}
