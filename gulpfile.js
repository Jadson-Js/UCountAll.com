const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch')

gulp.task('minify-css', function (done) { // minificar css
  return gulp.src('public/css/*.css') // encontra pagina de css bruta
    .pipe(cleanCSS()) // usa uma o pipe para limpar
    .pipe(gulp.dest('public/css')) // e retorna o resultado em um pagina
});

gulp.task('sass', function (done) {
  return gulp.src('src/scss/*/*.scss')
    .pipe(sass().on('error', sass.logError)) //
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function () {
  gulp.watch('src/scss/*/*.scss', gulp.series('sass'));
});

// npm i gulp gulp-clean-css gulp-watch sass gulp-sass --save-dev
// npm i @babel/preset-env @babel/core @babel/preset-react babel-core babel-loader babel-preset-react css-loader gulp
// npm i gulp-clean-css gulp-sass gulp-watch html-webpack-plugin sass style-loader url-loader webpack webpack-cli
