const { src, dest, watch, parallel } = require('gulp');

const output_path = 'docs';

function copyMiligram(cb) {
    src('node_modules/milligram/dist/milligram.min.css')
    .pipe(dest(output_path + '/css/'));
    cb();
}

function copyNormalizeCSS(cb) {
    src('node_modules/normalize.css/normalize.css')
    .pipe(dest(output_path + '/css/'));
    cb();
}

function copyJsYaml(cb) {
    src('node_modules/js-yaml/dist/js-yaml.min.js')
    .pipe(dest(output_path + '/js/'));
    cb();
}

function copyCodemirror(cb) {
    src('node_modules/codemirror/lib/*.js')
    .pipe(dest(output_path + '/js/codemirror/'));

    src('node_modules/codemirror/lib/*.css')
    .pipe(dest(output_path + '/css/codemirror/'));

    src('node_modules/codemirror/mode/**/*.js')
    .pipe(dest(output_path + '/js/codemirror/mode/yaml/'));

    src('node_modules/codemirror/theme/cobalt.css')
    .pipe(dest(output_path + '/css/codemirror/theme/'));

    src('node_modules/codemirror/addon/search/*.js')
    .pipe(dest(output_path + '/js/codemirror/addon/search/'));

    src('node_modules/codemirror/addon/search/*.css')
    .pipe(dest(output_path + '/css/codemirror/addon/search/'));

    src('node_modules/codemirror/addon/dialog/*.js')
    .pipe(dest(output_path + '/js/codemirror/addon/dialog/'));

    src('node_modules/codemirror/addon/dialog/*.css')
    .pipe(dest(output_path + '/css/codemirror/addon/dialog/'));

    src('node_modules/codemirror/addon/scroll/*.js')
    .pipe(dest(output_path + '/js/codemirror/addon/scroll/'));
    cb()
}

function copyHtml(cb) {
    src('src/*.html')
    .pipe(dest(output_path + '/'));
    cb();
}

function copyCss(cb) {
    src('src/css/*.css')
    .pipe(dest(output_path + '/css'));
    cb();
}

function copyJavascript(cb) {
    src('src/js/*.js')
    .pipe(dest(output_path + '/js'));
    cb()
}

function copyFont(cb) {
    src('src/font/*.ttf')
    .pipe(dest(output_path + '/font'));
    cb()
}

exports.default =  parallel(copyHtml, copyCss, copyJavascript, copyFont, copyMiligram, copyNormalizeCSS, copyJsYaml, copyCodemirror);
exports.watch = function() {
    watch('src/*.html', copyHtml);
}