"use strict";

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var tsify = require('tsify');
var watchify = require('watchify');
var gutil = require('gulp-util');
var buffer = require("vinyl-buffer");
var sourcemaps = require("gulp-sourcemaps");

var tsconfig = require('./tsconfig');

var b = browserify({
  basedir: "src/js",
  cache: {},
  packageCache: {},
  debug: true
})
  .add("index.ts")
  .plugin(tsify);
b = watchify(b);

// .bundle()
// .on('update', function () { console.log("I have updated!"); })
// .on('error', function (error) { console.error(error.toString()); })
// .pipe(source("index.js"))
// .pipe(gulp.dest('dist'));

gulp.task('build:js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
}

gulp.task("test", function() {
});

gulp.task("tdd", function() {
});
