var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var ts = require('gulp-typescript');
var tsconfig = require('./tsconfig');

gulp.task("experiment", function() {
  console.log(tsconfig.compileOnSave);
});

gulp.task("build:js", function() {
  var tsProject = ts.createProject();
});

gulp.task("test", function() {

});

gulp.task("tdd", function() {

});
