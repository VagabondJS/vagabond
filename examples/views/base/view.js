define([
  'chaplin',
  'lib/view-helper' // Just load the view helpers, no return value
], function(Chaplin) {
  'use strict';

  var View = Chaplin.View.extend({
    getTemplateFunction: function(){
		return _.template(this.template);
    },
 
  });

  return View;
});
