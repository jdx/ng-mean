var config = require('./config')
var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var app = express()

// allow views to access the assets helper and config
app.locals.assets = require('./assets')
app.locals.config = config

// setup logging
if (config.development) {
  app.use(morgan('dev')) // use colorized, short logger in dev
} else {
  app.use(morgan())
}

// parse json requests
app.use(bodyParser.json())

// use our root endpoint router
app.use(require('./endpoints'))

// tell server to listen on `config.port`
app.listen(config.port, function() {
  console.log('listening on port', config.port)
})
