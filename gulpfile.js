var gulp = require('gulp'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    browserSync = require('browser-sync').create();
    // livereload = require('gulp-livereload');

gulp.task('imagemin', function() {
    var imgSrc = './img/**/*',
        imgDst = './build/img';

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

gulp.task('htmlpage', function() {
    var htmlSrc = './*.html',
        htmlDst = './build';

    gulp.src(htmlSrc)
        .pipe(changed(htmlDst))
        .pipe(minifyHTML())
        .pipe(gulp.dest(htmlDst))
});

gulp.task('scripts', function() {
    gulp.src(['./js/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'))
});

gulp.task('styles', function() {
    gulp.src(['./css/*.css'])
        .pipe(concat('main.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build/css/'))
});

gulp.task('fonts', function() {
    gulp.src('./fonts/**/*.{ttf, woff, eof, svg}')
        .pipe(gulp.dest('./build/fonts'));
});

gulp.task('browser-sync', function() {
     var files = [
      './**/*.html',
      './css/**/*.css',
      './img/**/*.png',
      './js/**/*.js'
   ];

    browserSync.init(files, {
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles', 'fonts'], function() {
    gulp.watch('./*.html', function() {
        gulp.run('htmlpage');

    });

    gulp.watch('./css/*.css', function() {
        gulp.run('styles');
    });

    gulp.watch('./js/**/*.js', function() {
        gulp.run('scripts');
    });
});
