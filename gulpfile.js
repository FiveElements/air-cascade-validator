'use strict';
var gulp = require('gulp');

// Lint
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var browserSync = require('browser-sync');

 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// DEFAULT FOR 'gulp' COMMAND
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Run TASKS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Watch Files For Changes & Reload
gulp.task('serve',   function () {
    // browserSync Server
    // ------------------
    browserSync({
        notify: true,
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        startPath: "/air-cascade-validator/demo/index.html",
        server: {
            baseDir: ['../.'],
            directory: true
        }
    });

});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Registering FOR 'gulp' COMMAND
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Load tasks for web-component-tester
// Adds tasks for `gulp test:local` and `gulp test:remote`
try { require('web-component-tester').gulp.init(gulp); } catch (err) {}

