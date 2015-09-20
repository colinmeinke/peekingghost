// Create kampot namespace
// and define some config vars
(function ( w ) {
  'use strict';

  w.kampot = w.kampot || {};

  w.kampot.env = ( w.location.hostname === 'localhost' ) ?
    'development' : 'production';
}( window ));

// Add fonts-loaded class to html when
// Antic Slab has completed loading
(function ( d, w ) {
  'use strict';

  new w.FontFaceObserver( 'Antic Slab' )
    .check()
    .then(function () {
        d.documentElement.className += ' fonts-loaded';
    });
}( document, window ));

// Add scrolled class to body
// when not at top of page
(function ( d, w ) {
  'use strict';

  var scrolled = false;
  var body = d.querySelectorAll( 'body' )[ 0 ];

  w.addEventListener( 'scroll', function () {
    if (( !scrolled ) && ( w.pageYOffset > 124 )) {
      scrolled = true;
      body.classList.add( 'scrolled' );
    } else if (( scrolled ) && ( w.pageYOffset < 124 )) {
      scrolled = false;
      body.classList.remove( 'scrolled' );
    }
  });
}( document, window ));
