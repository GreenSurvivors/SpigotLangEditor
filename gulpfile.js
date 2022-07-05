const { src, dest, watch, parallel } = require('gulp');

function copyMiligram(cb) {
    src('node_modules/milligram/dist/milligram.min.css')
    .pipe(dest('dist/css/'));
    cb();
}

function copyNormalizeCSS(cb) {
    src('node_modules/normalize.css/normalize.css')
    .pipe(dest('dist/css/'));
    cb();
}

function copyHtml(cb) {
    src('src/*.html')
    .pipe(dest('dist/'));
    cb();
}

function copyCss(cb) {
    src('src/css/*.css')
    .pipe(dest('dist/css'));
    cb();
}

function copyJavascript(cb) {
    src('src/js/*.js')
    .pipe(dest('dist/js'));
    cb()
}

exports.default =  parallel(copyHtml, copyCss, copyJavascript, copyMiligram, copyNormalizeCSS);
exports.watch = function() {
    watch('src/*.html', copyHtml);
}