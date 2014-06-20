var express = require('express')
var config = require('../config')

var maxAge = config.assets.cacheControl ? 0 : 31536000000
router = express.static(__dirname + '/../../assets', {maxAge: maxAge})

module.exports = router
