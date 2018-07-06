'use strict';

// TODO: fix jshint error hint...
import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Static server
gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watch', ['html', 'css', 'js'], done => {
    browserSync.reload();
    done();
});

gulp.task('serve', () => {
    browserSync({
        notify: false,
        logPrefix: '-> ',
        server: {
            baseDir: './'
        },
        port: 3000
    });

    gulp.watch(['./index.html', 'source/**/*.html'], reload);
    gulp.watch(['source/**/*.css'], reload);
    gulp.watch(['source/**/*.js'], reload);
});
