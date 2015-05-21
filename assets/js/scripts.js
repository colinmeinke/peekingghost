// Create kampot namespace
// and define some config vars
(function ( w ) {
  'use strict';

  w.kampot = w.kampot || {};

  w.kampot.env = ( w.location.hostname === 'localhost' ) ?
    'development' : 'production';

  w.kampot.disqus_shortname = 'peekingduck';

  w.kampot.analytics = w.kampot.analytics || {};
  w.kampot.analytics.ga_tracking_id = 'UA-58016079-1';
}( window ));

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

// Disqus comments
(function ( d, k ) {
  'use strict';

  if ( k.disqus_shortname ) {
    var comments = d.getElementById( 'disqus_thread' );

    if ( comments ) {
      var disqus_shortname = k.disqus_shortname;
      var disqus_identifier = d.querySelectorAll( '.post' )[ 0 ].dataset.id;

      var script = d.createElement( 'script' );

      script.type = 'text/javascript';
      script.async = true;
      script.src = '//' + disqus_shortname + '.disqus.com/embed.js';

      d.getElementsByTagName( 'script' )[ 0 ].appendChild( script );
    }
  }
}( document, window.kampot ));

// Google analytics
(function ( w, d, k ) {
  'use strict';

  if ( k.analytics.ga_tracking_id && ( k.env === 'production' ) ) {
    (function ( i, s, o, g, r, a, m ) {
      i.GoogleAnalyticsObject = r;
      i[ r ] = i[ r ] || function () {
        ( i[ r ].q = i[ r ].q || []).push( arguments );
      };
      i[ r ].l = 1 * new Date();
      a = s.createElement( o );
      m = s.getElementsByTagName( o )[ 0 ];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore( a, m );
    }( w, d, 'script', '//www.google-analytics.com/analytics.js', 'ga' ));

    w.ga( 'create', k.analytics.ga_tracking_id, 'auto' );
    w.ga( 'send', 'pageview' );
  }
}( window, document, window.kampot ));
