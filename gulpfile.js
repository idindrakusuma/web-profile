var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');

gulp.task('scripts', function () {
    // first thing, where is file?
    gulp.src('resources/js/*.js')
        // make to min
        .pipe(uglify())
        // destination of assets
        .pipe(gulp.dest('assets/js/'));
});

gulp.task('css', function(){
    gulp.src('resources/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/css'))
});

gulp.task('default', ['scripts','css']);