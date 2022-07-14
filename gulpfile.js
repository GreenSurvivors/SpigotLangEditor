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

function copyJsYaml(cb) {
    src('node_modules/js-yaml/dist/js-yaml.min.js')
    .pipe(dest('dist/js/'));
    cb();
}

function copyCodemirror(cb) {
    src('node_modules/codemirror/lib/*.js')
    .pipe(dest('dist/js/codemirror/'));

    src('node_modules/codemirror/lib/*.css')
    .pipe(dest('dist/css/codemirror/'));

    src('node_modules/codemirror/mode/**/*.js')
    .pipe(dest('dist/js/codemirror/mode/yaml/'));

    src('node_modules/codemirror/theme/cobalt.css')
    .pipe(dest('dist/css/codemirror/theme/'));

    src('node_modules/codemirror/addon/search/*.js')
    .pipe(dest('dist/js/codemirror/addon/search/'));

    src('node_modules/codemirror/addon/search/*.css')
    .pipe(dest('dist/css/codemirror/addon/search/'));

    src('node_modules/codemirror/addon/dialog/*.js')
    .pipe(dest('dist/js/codemirror/addon/dialog/'));

    src('node_modules/codemirror/addon/dialog/*.css')
    .pipe(dest('dist/css/codemirror/addon/dialog/'));

    src('node_modules/codemirror/addon/scroll/*.js')
    .pipe(dest('dist/js/codemirror/addon/scroll/'));
    cb()
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

function copyFont(cb) {
    src('src/font/*.ttf')
    .pipe(dest('dist/font'));
    cb()
}

exports.default =  parallel(copyHtml, copyCss, copyJavascript, copyFont, copyMiligram, copyNormalizeCSS, copyJsYaml, copyCodemirror);
exports.watch = function() {
    watch('src/*.html', copyHtml);
}