var gulp   = require('gulp')
var concat = require('gulp-concat')
var templateCache = require('gulp-angular-templatecache')

gulp.task('ng:build', function () {
  return gulp.src(['ng/module.js', 'ng/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('assets'))
})

gulp.task('ng:templates', function () {
  return gulp.src('ng/templates/**/*.html')
    .pipe(templateCache('templates.js', { standalone: true}))
    .pipe(gulp.dest('assets'))
})

gulp.task('ng:watch', ['ng:build', 'ng:templates'], function () {
  gulp.watch('ng/**/*.js', ['ng:build'])
  gulp.watch('ng/templates/**/*.html', ['ng:templates'])
})
