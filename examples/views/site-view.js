define(['views/base/view', 'text!templates/site.html'], function(View, template) {
  'use strict';

  var SiteView = View.extend({
    container: '#main-app',
    id: 'site-container',
    regions: {
      main: '#main-container'
    },
    template: template,
    initialize: function(){
      View.prototype.initialize.apply(this, arguments);
    },
  });

  return SiteView;
});
