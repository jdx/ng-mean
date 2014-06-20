var gulp = require('gulp')
var fs = require('fs')

fs.readdirSync('gulp').forEach(function (task) {
  require('./gulp/' + task)
})

gulp.task('test',  ['lint'])
gulp.task('build', ['rev'])
gulp.task('dev',   ['lint:watch', 'css:watch', 'ng:watch', 'server:dev'])
gulp.task('prod',  ['server:prod'])

gulp.task('default', function () {
  console.log('APPNAME commands: ')
  console.log('test:  tests node and angular code')
  console.log('build: builds assets, minifies and revs hash to filename')
  console.log('dev:   starts the node server in dev mode, adds watchers to recompile js and css')
  console.log('prod:  builds assets, runs app in production mode')
})
