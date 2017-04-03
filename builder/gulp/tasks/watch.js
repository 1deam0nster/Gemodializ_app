var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['watchify','browserSync'], function() {
    gulp.watch("../src/styles/**/*.sass", ['sass']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.fonts.src, ['fonts']);
    gulp.watch("../src/templates/**/*.jade", ['jade']);
    // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
