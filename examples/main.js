requirejs.config({

  baseUrl: './',

  paths: {
    jquery: '../vendor/jquery/jquery',
    underscore: '../vendor/lodash/dist/lodash',
    backbone: '../vendor/backbone/backbone',
    text: '../vendor/requirejs-text/text',
    chaplin: '../vendor/chaplin/chaplin',
    localstorage: "../vendor/backbone.localStorage/backbone.localStorage"
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(['application', 'routes'], function(Application, routes) {
  new Application({
    routes: routes,
    controllerSuffix: '-controller',
    root: 'examples/'
  });
});
