var gulp = require('gulp')
var fs = require('fs')

fs.readdirSync('gulp').forEach(function (task) {
  require('./gulp/' + task)
})

gulp.task('text', ['lint'])
gulp.task('build', ['css:build', 'ng:build', 'ng:templates'])
gulp.task('default', ['lint:watch', 'css:watch', 'ng:watch', 'server'])
