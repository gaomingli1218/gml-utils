const gulp = require('gulp')
const replace = require('gulp-replace')
const pack = require('./package.json')
const babel = require('gulp-babel');
gulp.task('copy_resource', () => {
  return gulp.src('./func/*')
    .pipe(babel())
    .pipe(gulp.dest('./lib'))
})

gulp.task('update_version', () => {
  return gulp.src('./func/ctor.js')
    .pipe(replace(/'@VERSION'/, `'${pack.version}'`))
    .pipe(gulp.dest('./lib'))
})

gulp.task('build', gulp.series('copy_resource', 'update_version'))
