define([
  'views/base/view',
  'text!templates/post.html'
], function(View, template) {
  'use strict';

  var PostView = View.extend({
    autoRender: true,
    className: 'post',
    template: template,
    events: {
      'submit form': 'savePost'
    },
    savePost: function(e){
      e.preventDefault();
      // get data in serialized form
      var form_data = $(e.currentTarget).serializeArray();

      // transform serialized data into model data
      this.model.setFormData(form_data);

    }
  });

  return PostView;
});
