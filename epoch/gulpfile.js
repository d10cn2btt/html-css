var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var swig = require('gulp-swig');

gulp.task('swig', function() {
    return gulp.src('app/swig/**/*.html')
        .pipe(swig({defaults: { cache: false }}))
        .pipe(gulp.dest('app/html'))
});

gulp.task('sass', function () {
    return gulp.src('app/assets/scss/**/*.scss') // Gets all files ending with .scss in app/scss
        .pipe(sass())// Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

//gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 

gulp.task('watch', ['browserSync', 'sass', 'swig'], function () {
    gulp.watch('app/assets/scss/**/*.scss', ['sass']);
    gulp.watch('app/swig/*.html', ['swig']);
    // gulp.watch('app/twig/*.twig', ['twig']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/assets/js/**/*.js', browserSync.reload);
});