var app = require('express').Router()

app.use(require('./static'))
app.use('/api', require('./api'))

// This is a catch-all for html5 pushstate routing in angular
app.use(require('./layout'))

module.exports = app
