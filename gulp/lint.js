var gulp   = require('gulp')
var jshint = require('gulp-jshint')

var files = ['ng/**/*.js', 'node/**/*.js', 'gulp/**/*.js']

gulp.task('lint', function () {
  return gulp.src(files)
    .pipe(jshint())
})

gulp.task('lint:watch', ['lint'], function () {
  gulp.watch(files, ['lint'])
})
