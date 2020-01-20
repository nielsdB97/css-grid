var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var del = require('del');
var browserSync = require('browser-sync').create();

var paths = {
  html: {
    src: 'src/index.html',
    dest: 'dist/',
  },
  styles: {
    src: 'src/styles.css',
    dest: 'dist/css',
  }
}

function clean() {
  return del(['dist']);
}

function copyHTML() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest));
}

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
      grid: true
    }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function watch() {
  gulp.watch(paths.html.src, copyHTML);
  gulp.watch(paths.styles.src, styles);
}

function webserver() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    open: false
  });
}

var build = gulp.series(clean, gulp.parallel(copyHTML, styles));

gulp.task('build', build);
gulp.task('default', gulp.series(build, gulp.parallel(webserver, watch)));
