var concat = require( 'gulp-concat' );
var gulp = require( 'gulp' );
var minifyCSS = require( 'gulp-minify-css' );
var rename = require( 'gulp-rename' );
var uglify = require( 'gulp-uglify' );

gulp.task( 'updateFontFaceObserver', function () {
  return gulp.src( './node_modules/fontfaceobserver/fontfaceobserver.js' )
    .pipe( rename( 'fontfaceobserver.min.js' ))
    .pipe( gulp.dest( './assets/js/lib/' ));
});

gulp.task( 'minifyCSS', function () {
  return gulp.src( './assets/css/styles.css' )
    .pipe( minifyCSS())
    .pipe( rename( 'styles.min.css' ))
    .pipe( gulp.dest( './assets/css/' ));
});

gulp.task( 'inlineCSS', [ 'minifyCSS' ], function () {
  return gulp.src( './assets/css/styles.min.css' )
    .pipe( rename( 'styles.hbs' ))
    .pipe( gulp.dest( './partials/' ));
});

gulp.task( 'minifyJS', function () {
  return gulp.src( './assets/js/app.js' )
    .pipe( uglify())
    .pipe( rename( 'app.min.js' ))
    .pipe( gulp.dest( './assets/js/' ));
});

gulp.task( 'concatJS', [ 'minifyJS' ], function () {
  return gulp.src([ './assets/js/lib/fontfaceobserver.min.js', './assets/js/app.min.js' ])
    .pipe( concat( 'scripts.min.js' ))
    .pipe( gulp.dest( './assets/js/' ));
});

gulp.task('watch', function() {
  gulp.watch( './assets/css/*.css', [ 'minifyCSS', 'inlineCSS' ]);
  gulp.watch( './assets/js/*.js', [ 'minifyJS', 'concatJS' ]);
});

gulp.task( 'default', [ 'minifyCSS', 'inlineCSS', 'minifyJS', 'concatJS' ]);
