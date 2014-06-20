var _ = require('lodash')
var env = process.env.NODE_ENV || 'development'

var baseConfig = {
  port:        process.env.PORT || 3000,
  env:         env,
  development: env === 'development',
  production:  env === 'production',
  workerCount: process.env.WORKER_COUNT || 2,
  secretKey:   process.env.SECRET_KEY || '12345',
  assets: {
    rev: false,
    cacheControl: false
  },
  github: {
    redirectUri: process.env.GITHUB_REDIRECT_URI,
    clientId:    process.env.GITHUB_CLIENT_ID,
    secretKey:   process.env.GITHUB_SECRET_KEY
  }
}

var envConfig = require('./' + env)

module.exports = _.merge(baseConfig, envConfig)
