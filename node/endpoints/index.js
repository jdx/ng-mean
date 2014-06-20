var app = require('express').Router()

app.use(require('./static'))
app.use(require('./layout'))
app.use('/api', require('./api'))

module.exports = app
