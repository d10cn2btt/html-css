var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

/*
gulp.task('sass', function(){
  return gulp.src('source-files')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('destination'))
});
*/

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())// Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})
