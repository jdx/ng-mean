var gulp   = require('gulp')
var jshint = require('gulp-jshint')

var lintable = ['ng/**/*.js', 'node/**/*.js', 'gulp/**/*.js']
gulp.task('lint', function () {
  return gulp.src(lintable)
    .pipe(jshint())
})

gulp.task('lint:watch', ['lint'], function () {
  gulp.watch(lintable, ['lint'])
})
