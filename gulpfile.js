const gulp = require('gulp');
const { series } = require('gulp');
const compass = require('gulp-compass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const del = require('del');

function build(cb) {
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
    cb();
};
exports.build = build;

function clean(cb) {
    return del(['static/css/screen.*']);
    cb();
};
exports.clean = clean;

exports.default = series(clean, build);
