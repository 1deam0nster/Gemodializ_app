var gulp      = require('gulp');
var config    = require('../config').sass;
var minifyCSS = require('gulp-minify-css');
var size      = require('gulp-filesize');

gulp.task('minifyCss', ['sass'], function() {
    return gulp.src(config.preMinifySrc)
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest(config.dest))
        .pipe(size());
})