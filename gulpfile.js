var gulp = require('gulp'),
    compass = require('gulp-compass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('default', ['clean'], function() {
    gulp.start('styles');
});

gulp.task('styles', function() {
    return gulp.src('sass/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            sass: 'sass',
            css: 'static/css',
            sourcemap: true
        }))
        .pipe(sourcemaps.init())
            .pipe(autoprefixer(['last 2 versions', '> 10%']))
            .pipe(gulp.dest('static/css'))
            .pipe(rename({suffix: '.min'}))
            .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('static/css'))
        //.pipe(notify({message: 'Styles task complete'}))
});

gulp.task('clean', function() {
    return del(['static/css/screen.*']);
});
