var gulp    = require('gulp')
var nodemon = require('gulp-nodemon')

var nodemonOpts = { script: 'node/server.js',
                    ext: 'js',
                    ignore: ['ng*', 'gulp*', 'assets*'] }

gulp.task('server:dev', function () {
  nodemon(nodemonOpts)
})

gulp.task('server:prod', ['build'], function () {
  process.env.NODE_ENV = 'production'
  nodemonOpts.script = 'node/boot.js'
  nodemon(nodemonOpts)
})
