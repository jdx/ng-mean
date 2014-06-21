var mongoose = require('mongoose')
var config = require('./config')

mongoose.connect(config.mongoUri, function () {
  console.log('mongo connected to:', config.mongoUri)
})

module.exports = mongoose
