var gulp = require('gulp')
var rev  = require('gulp-rev')

var files = [
  'assets/app.js',
  'assets/templates.js',
  'assets/app.css'
]

gulp.task('rev', ['minify'], function () {
  return gulp.src(files, {base: 'assets'})
    .pipe(gulp.dest('assets'))
    .pipe(rev())
    .pipe(gulp.dest('assets'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('assets'))
})
