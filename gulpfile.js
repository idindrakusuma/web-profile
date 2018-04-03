var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');

gulp.task('scripts', function () {
    // first thing, where is file?
    return gulp.src('resources/js/*.js')
        // make to min
        .pipe(uglify())
        // destination of dist
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('plugins', function () {
    // first thing, where is file?
    return gulp.src('resources/js/plugins/*.js')
        // make to min
        .pipe(uglify())
        // destination of dist
        .pipe(gulp.dest('dist/js/plugins'));
});

gulp.task('css', function(){
    return gulp.src('resources/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('default', ['scripts','plugins','css']);