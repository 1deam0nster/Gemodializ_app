var gulp        = require('gulp');
var config      = require('../config').jade;
var jade        = require('gulp-jade');
var browserSync = require('browser-sync');

gulp.task('jade', function() {
    return gulp.src(config.src)
        .pipe(jade())
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));
});