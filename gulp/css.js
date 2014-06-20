var gulp = require('gulp')
var stylus = require('gulp-stylus')
var plumber = require('gulp-plumber')

var files = [
  'css/app.styl'
]

gulp.task('css:build', function () {
  return gulp.src(files)
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('assets'))
})

gulp.task('css:watch', ['css:build'], function () {
  gulp.watch(files, ['css:build'])
})
