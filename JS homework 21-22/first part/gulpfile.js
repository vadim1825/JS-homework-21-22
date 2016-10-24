var gulp = require('gulp');

var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

var pump = require('pump');

var watch = require('gulp-watch');




gulp.task('scripts', function() {
  return gulp.src('app/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/js/js_build'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('app/js/js_build/main.js'),
        uglify(),
        gulp.dest('build/js')
    ],
    cb
  );
});

gulp.task('watch', function(){
  gulp.watch('app/js/*.js', ['scripts']);
  gulp.watch('app/js/js_build/main.js', ['compress']);
});

gulp.task('default', ['scripts', 'compress', 'watch']);