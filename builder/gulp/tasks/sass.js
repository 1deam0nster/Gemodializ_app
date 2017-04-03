var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../utils/handleErrors');
var config       = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');
var size         = require('gulp-filesize');

gulp.task('sass', ['vendorStyles'], function () {
    return gulp.src(config.src)
        .pipe(plumber())
      //.pipe(sourcemaps.init())
        .pipe(sass(config.settings))
        .on('error', handleErrors)
      //.pipe(sourcemaps.write())
        .pipe(autoprefixer({ browsers: ['last 3 version'] }))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));
});