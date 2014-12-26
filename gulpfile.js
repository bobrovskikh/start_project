"use strict";

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    opn = require('opn');

//запуск локального сервера
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
    opn('http://localhost:8080');
});

//HTML
gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

//CSS
gulp.task('css', function () {
    gulp.src('./app/css/*.css')
        .pipe(connect.reload());
});

//JS
gulp.task('js', function () {
    gulp.src('./app/js/*.js')
        .pipe(connect.reload());
});

//Слежка
gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch(['./app/css/*.css'], ['css']);
    gulp.watch(['./app/js/*.js'], ['js']);
});

//Defolt
gulp.task('default', ['connect', 'watch']);