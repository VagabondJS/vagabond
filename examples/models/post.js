define([
  'chaplin',
  'models/base/model'
], function(Chaplin, Model) {
  'use strict';

  var Post = Model.extend({
    defaults: {
      title: '',
      content: '',
      category: '',
      date: ''
    },

    setFormData: function(form_data){
      return _.reduce(form_data, function(result, object){
        result[object.name] = object.value;
        return result;
      }, {});
    }

  });

  return Post;
});
