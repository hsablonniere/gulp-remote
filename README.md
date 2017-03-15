# gulp-remote
get remote file


## Usage

```
var gulp = require('gulp');
gulp.remote = require('gulp-remote');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.remote([
      'https://cdnjs.cloudflare.com/ajax/libs/riot/3.3.2/riot.min.js',
      'https://cdn.jsdelivr.net/riot-route/3.0.0/route.min.js',
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'))
    ;
});
```

## Ref

- [gulp-remote-src/index.js at master · ddliu/gulp-remote-src](https://github.com/ddliu/gulp-remote-src/blob/master/index.js)
- [vinyl-fs/index.js at master · gulpjs/vinyl-fs](https://github.com/gulpjs/vinyl-fs/blob/master/lib/src/index.js)


