var gulp = require('gulp'),
    gulpMocha = require('gulp-mocha'),
    nodemon = require('gulp-nodemon'),
    env = require('gulp-env'),
    supertest = require('supertest');

gulp.task('default', function() {
    nodemon({
        script: 'app.js', 
        ext: 'js', 
        env: {
            PORT:8000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function() {
        console.log('restarting');
    })
});

gulp.task('test', function() {
    env({vars: {ENV:'Test'}});
    gulp.src('tests/*.js', {read: false})
        .pipe(gulpMocha({reporter: 'nyan'}))
});


