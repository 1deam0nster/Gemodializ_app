var dest = '../app';
var src = '../src';

var bowerDir = './bower_components';

module.exports = {
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: dest
        }
    },

    sass: {
        src: src + "/styles/*.{sass, scss}",
        preMinifySrc: dest + "/styles/*.css",
        dest: dest + "/styles/",
        spriteDest: src + "/styles/partials" ,
        settings: {
                includePaths: ['bower_components/foundation/scss'],
                outputStyle: 'expanded',
                indentedSyntax: true,
                imagePath: 'images'
        }
    },

    images: {
        src: src + "/images/**/*.*",
        dest: dest + "/i/"
    },

    js: {
        bowerDir: bowerDir,
        src: src + "/js/**/*.js",
        dest: dest + "/js/"
    },

    jade: {
        src: src + "/templates/pages/**/*.jade",
        dest: dest
    },

    fonts: {
        src: bowerDir + "/font-awesome/fonts/*.*",
        dest: dest + "/fonts/"
    },

    browserify: {
        bundleConfigs: [{
            entries: src + '/js/common.js',
            dest: dest + '/js',
            outputName: 'page.js'
        }]
    },

    production: {
        cssDest: dest + '/css/*.css',
        jsDest: dest + '/js/*.js',
        dest: dest
    }
};