define([
  'controllers/base/controller',
  'models/post',
  'views/post-view'
], function(Controller, Post, PostView) {
  'use strict';

  var PostController = Controller.extend({
    create: function(params) {
      this.model = new Post();
      this.view = new PostView({
        model: this.model,
        region: 'main'
      });
    }
  });

  return PostController;
});
