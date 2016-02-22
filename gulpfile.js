var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var tsify = require('tsify');
var watchify = require('watchify');

var tsconfig = require('./tsconfig');

gulp.task("build:js", function() {
  return browserify({
    basedir: "src/js",
    cache: {},
    packageCache: {}
  })
    .add("index.ts")
    // .plugin(watchify)
    .plugin(tsify)
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(source("index.js"))
    .pipe(gulp.dest('dist'));
});

gulp.task("test", function() {

});

gulp.task("tdd", function() {

});
