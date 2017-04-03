var gulp            = require('gulp');
var plumber         = require('gulp-plumber');
var sass            = require('gulp-sass');
var uglify          = require('gulp-uglify');
var minifyCss       = require('gulp-minify-css');
var rev             = require('gulp-rev');
var autoprefixer    = require('gulp-autoprefixer');
var config          = require('../config').sass;

gulp.task('vendorStyles', function() {
    //gulp.src(config.src)
    //    .pipe(plumber())
    //    .pipe(sass({
    //        includePaths: ['bower_components/foundation/scss'],
    //        outputStyle: 'expanded'
    //    }))
    //    .pipe(autoprefixer(
    //        "last 1 version", "> 1%", "ie 8", "ie 7"
    //    ))
    //    .pipe(gulp.dest(config.dest))
    //    .pipe(minifyCss())
    //    .pipe(gulp.dest(config.dest));

    gulp.src('bower_components/animate.css/animate.min.css')
        .pipe(gulp.dest(config.dest))

    gulp.src('bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css')
        .pipe(gulp.dest(config.dest))
});