var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:3000",
        open: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/sass/*.scss', ['sass']);
});