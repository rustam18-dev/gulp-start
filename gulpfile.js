const {src, dest, watch} = require('gulp')

const scss   = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default;


const scripts = () => {
    return src('app/js/main.js')
    .pipe(concat('main.min.css'))
    .pipe(uglify())
    .pipe(dest('app/js'))
}

const styles = () => {
    return src('app/scss/style.scss')
    .pipe(concat('style.min.css'))
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(dest('app/css'))
}

const watching = () => {
    watch(['app/scss/style.scss'], styles)
    watch(['app/js/main.js'], scripts)
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;