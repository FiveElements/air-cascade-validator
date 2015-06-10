'use strict';
var gulp = require('gulp');

// Lint
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

// Lint JavaScript
gulp.task('jshint', function () {
    return gulp.src([
        '*.js',
        '*.html'
    ])
        .pipe(jshint.extract()) // Extract JS from .html files
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish')) ;
});


gulp.task('default', ['test:local']);
gulp.task('test', ['test:local']);

// Load tasks for web-component-tester
// Adds tasks for `gulp test:local` and `gulp test:remote`
try { require('web-component-tester').gulp.init(gulp); } catch (err) {}

