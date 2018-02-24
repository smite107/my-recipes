let gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    eslint      = require('gulp-eslint'),
    notify      = require('gulp-notify'),
    plumber     = require('gulp-plumber'),
    cleanCSS    = require('gulp-clean-css'),
    sourcemaps  = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};

var plumberOptions = {
  errorHandler: onError,
};

gulp.task('sass', () => {
  return gulp.src('src/sass/**/*.scss')
        .pipe(plumber(plumberOptions))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: "localhost:3000",
    open: false
  });
});

// Lint JS/JSX files
gulp.task('eslint', () => {
  return gulp.src(['!src/js/registerServiceWorker.js', 'src/js/**/*.js'])
        .pipe(eslint({
          baseConfig: {
            "ecmaFeatures": {
              "jsx": true
            }
          }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch(['src/js/**/*.js'], ['eslint']);
});