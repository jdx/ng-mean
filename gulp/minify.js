var gulp       = require('gulp')
var ngAnnotate = require('gulp-ng-annotate')
var uglify     = require('gulp-uglify')
var cssmin     = require('gulp-cssmin')

var files = {
  js:  ['assets/app.js', 'assets/templates.js'],
  css: ['app.css']
}

gulp.task('minify:js', ['ng:build', 'ng:templates'], function () {
  return gulp.src(files.js)
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('assets'))
})

gulp.task('minify:css', ['css:build'], function () {
  return gulp.src(files.css)
    .pipe(cssmin())
    .pipe(gulp.dest('assets'))
})

gulp.task('minify', ['minify:js', 'minify:css'])
