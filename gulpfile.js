var gulp = require( 'gulp' );
var minifyCSS = require( 'gulp-minify-css' );
var rename = require( 'gulp-rename' );

gulp.task( 'minify', function () {
  gulp.src( './assets/css/styles.css' )
    .pipe( minifyCSS() )
    .pipe( rename( function ( path ) {
      path.extname = '.min.css'
    }))
    .pipe( gulp.dest( './assets/css/' ));
});

gulp.task('watch', function() {
  gulp.watch( './assets/css/*.css', [ 'default' ]);
});

gulp.task( 'default', [ 'minify' ]);
