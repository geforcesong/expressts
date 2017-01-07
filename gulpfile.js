const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const packageObject = require('./package.json');
const del = require('del');

let paths = {
  less: ['./web/views/**/*.less']
};

gulp.task("clean", ()=>{
    del(['./public/build']);
    del(['./dist']);
});

gulp.task("compile less",function(){
    let fileName = `site.${packageObject.version}.css`
    gulp.src(['./web/views/**/*.less'])
        .pipe(less())
        .pipe(concat(fileName))
        .pipe(gulp.dest('./public/build'));
})

gulp.task('watch', function() {
  gulp.watch(paths.less, ['compile less']);
});

gulp.task('default', ['clean', 'compile less']);
gulp.task('develop', ['clean', 'compile less', 'watch']);