import gulp from 'gulp';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';

gulp.task('default', () => {
    return browserify('src/app.js')
        .transform('babelify')
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('build'))
});

gulp.task('watch', () => {
    return gulp.watch('src/**/*.js', gulp.series('default'))
});
