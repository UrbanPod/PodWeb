"use strict";



// IMPORTS =====================================================================

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var buffer = require("vinyl-buffer");
var sourcemaps = require("gulp-sourcemaps");

var browserify = require('browserify');
var tsify = require('tsify');
var watchify = require('watchify');

var sass = require('gulp-sass');



// JS ==========================================================================

var tsconfig = require('./tsconfig');

var b = browserify({
  basedir: "src/js",
  cache: {},
  packageCache: {},
  debug: true
}).add("index.ts")
  .plugin(tsify);
b = watchify(b);

gulp.task('watch:js', bundle); // So you can run `gulp js` to build the file.
b.on('update', bundle); // On any dep update, runs the bundler.
b.on('log', gutil.log); // Output build logs to terminal.

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error')) // Log errors if they happen.
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
}



// CSS =========================================================================

gulp.task("build:css", function() {
  return gulp.src("src/scss/index.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task("watch:css", function() {
  gulp.watch('./src/**/*.scss', ['build:css']);
});



// TESTING =====================================================================

gulp.task("test", function() {
});

gulp.task("tdd", function() {
});



// FINAL =======================================================================

gulp.task("watch", ["watch:js", "watch:css"]);
