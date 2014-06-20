var gulp          = require('gulp')
var concat        = require('gulp-concat')
var templateCache = require('gulp-angular-templatecache')

var files = {
  scripts:   ['ng/module.js', 'ng/**/*.js'],
  templates: ['ng/templates/**/*.html']
}

gulp.task('ng:build', function () {
  return gulp.src(files.scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('assets'))
})

gulp.task('ng:templates', function () {
  return gulp.src(files.templates)
    .pipe(templateCache('templates.js', { standalone: true}))
    .pipe(gulp.dest('assets'))
})

gulp.task('ng:watch', ['ng:build', 'ng:templates'], function () {
  gulp.watch(files.scripts,   ['ng:build'])
  gulp.watch(files.templates, ['ng:templates'])
})
