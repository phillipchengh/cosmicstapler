var gulp = require('gulp'); 
var less = require('gulp-less');
var util = require('gulp-util');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var inlinesource = require('gulp-inline-source');
var watch = require('gulp-watch');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');

// Run this function on some error instead of exiting gulp
var onError = function(err) {
  util.beep();
  console.log(err);
};

gulp.task('inlinesource', function() {
  gulp.src(['./in/tumblr.html'])
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(inlinesource({compress: false}))
  .pipe(gulp.dest('./out/'));
});

gulp.task('styles', function() {
  gulp.src(['./in/less/style.less'])
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(less({
    paths: ['in/less']
  }))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./in'));
});

var watcher = watchify(browserify({
  entries: ['./in/js/Main.js'],
  transform: [reactify],
  debug: true,
  cache: {}, packageCache: {}, fullPaths: true
}));

gulp.task('scripts', function() {
   return watcher
   .bundle()
   // .pipe(plumber({
   //  errorHandler: onError 
   // }))
   .on('error', function(err) {
     util.beep();
     util.log('Browserify error:', err); 
   })
   .pipe(source('script.js'))
   .pipe(gulp.dest('./in'));
});

gulp.task('watch', function() {
  watch('./in/less/**', function() {
    gulp.start('styles');
  });

  watcher.on('update', function() {
    gulp.start('scripts');
  });
  
  watcher.on('log', util.log);

  watch(['./in/style.css', './in/script.js', './in/tumblr.html'], function() {
    gulp.start('inlinesource'); 
  });

});

gulp.task('default', ['watch', 'styles', 'scripts', 'inlinesource']);
