/**
 * @file
 */

/* jshint node: true */
/* jslint indent: 2 */

"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var jshint = require('gulp-jshint');
var autoprefixer = require('gulp-autoprefixer');
var moduleImporter = require('sass-module-importer');
var twig = require('gulp-twig');

gulp.task('styles', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass({importer: moduleImporter()}))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions', 'iOS >= 8']}))
    .pipe(gulp.dest('./dist/css/'));
});

// Javascript Lint.
gulp.task('js-lint', function () {
  return gulp.src('./src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Twig templates to HTML
gulp.task('templates', function () {
  return gulp.src('./src/templates/**/*.twig') // run the Twig template parser on all .html files in the "src" directory
    .pipe(twig())
    .pipe(gulp.dest('./dist/templates/')); // output the rendered HTML files to the "dist" directory
});

//Watch task
gulp.task('default', function () {
  gulp.watch('./src/scss/**/*.scss', ['styles']);
  gulp.watch('./src/js/**/*.js');
  gulp.watch('./src/templates/**/*.twig', ['templates']);
});
