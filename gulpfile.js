const gulp = require('gulp');
const less = require('gulp-less');
var concat = require('gulp-concat');
const packageObject = require('./package.json');

gulp.task("compile less",function(){
    var fileName = `site.${packageObject.version}.css`
    gulp.src(['./web/views/**/*.less'])
        .pipe(less())
        .pipe(concat(fileName))
        .pipe(gulp.dest('./public/build'));
})

gulp.task('default', ['compile less']);