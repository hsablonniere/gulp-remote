/*
 *
 */

var gulp = require('gulp');
gulp.remote = require('../index.js');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.remote([
      './a.js',
      'https://cdnjs.cloudflare.com/ajax/libs/riot/3.3.2/riot.min.js',
      'https://cdn.jsdelivr.net/riot-route/3.0.0/route.min.js',
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'))
    ;
});
