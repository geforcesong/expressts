var gulp = require('gulp');
var less = require('gulp-less');
gulp.task("compile less",function(){
    gulp.src(['./web/views/**/*.less'])
        .pipe(less())
        .pipe(gulp.dest('./web/views/'));
})

gulp.task('default', ['compile less']);