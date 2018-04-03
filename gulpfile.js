var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', function () {
    // first thing, where is file?
    gulp.src('resources/js/*.js')
        // make to min
        .pipe(uglify())
        // destination of assets
        .pipe(gulp.dest('assets/js/'));
});