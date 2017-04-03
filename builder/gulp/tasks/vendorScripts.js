var gulp            = require('gulp');
var concat          = require('gulp-concat');
var filter          = require('gulp-filter');
var order           = require('gulp-order');
var mainBowerFiles  = require('main-bower-files');
var config          = require('../config').js;

gulp.task('vendorScripts', function () {
    var vendors = mainBowerFiles();

    return gulp.src(vendors)
        .pipe(filter('**.js'))
        .pipe(order(vendors))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(config.dest));
})