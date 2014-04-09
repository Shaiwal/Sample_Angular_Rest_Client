// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var file = require('gulp-filesize');
var util = require('gulp-util');
var minifyCSS = require('gulp-minify-css');
// Lint Task
gulp.task('lint', function() {
    return gulp.src('WebContent/js/restController.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// minify and concat our css files

gulp.task('css', function() {
    return gulp.src('WebContent/css/*.css')
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('WebContent/css'));
});


// Default Task
gulp.task('default', ['lint', 'css']);