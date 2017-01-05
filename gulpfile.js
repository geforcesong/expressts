const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const packageObject = require('./package.json');
const del = require('del');

gulp.task("clean", ()=>{
    del(['./public/build']);
});

gulp.task("compile less",function(){
    let fileName = `site.${packageObject.version}.css`
    gulp.src(['./web/views/**/*.less'])
        .pipe(less())
        .pipe(concat(fileName))
        .pipe(gulp.dest('./public/build'));
})

gulp.task('default', ['clean', 'compile less']);