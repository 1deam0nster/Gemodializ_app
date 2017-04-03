
var gulp = require('gulp');
var spritesmith  = require('gulp.spritesmith')
var config = require('../config');


gulp.task('sprites', function() {
    var spriteData =
        gulp.src('../src/images/design/neon/*.png') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: '../i/sprite.png',
                cssName: 'sprite.sass',
                cssFormat: 'sass',
                algorithm: 'binary-tree'
            }));

    spriteData.img.pipe(gulp.dest(config.images.dest)); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest(config.sass.spriteDest)); // путь, куда сохраняем стили
});