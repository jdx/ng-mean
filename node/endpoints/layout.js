var router = require('express').Router()

router.get('/', function (req, res) {
  res.render(__dirname + '/../../layout.html.ejs')
})

module.exports = router
