var gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
gulpif = require('gulp-if'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
useref = require('gulp-useref'),
clean = require('gulp-clean');

//таск для компиляции sass в css
gulp.task('sass', function(){
	return gulp.src('app/sass/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
})


// таск подключения browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});
//таск для очистки папки dist
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('html',['clean'], function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulp.dest('dist'));
});

gulp.task('build',['html'], function(){

    var buildImg = gulp.src('app/img/**/*')
    .pipe(gulp.dest('dist/img'));

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

    var fontAweson = gulp.src('app/bower_components/font-awesome/fonts/*')
    .pipe(gulp.dest('dist/fonts'))


});
//таск слежения за файломи 
gulp.task('watch', function(){
	gulp.watch('app/sass/*.sass', ['sass']);
    gulp.watch('app/index.html', browserSync.reload);
	gulp.watch('app/about.html', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'sass', 'watch']);