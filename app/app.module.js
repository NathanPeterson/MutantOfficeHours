(function(){
  'use strict';

  angular.module('mutantApp', [
      //Dependencies go here
      //angular modules
      'ui.router',

      //Third-party modules
      'firebase',

      //costume modules
      'mutantApp.home',
      'mutantApp.mutantList',
      'mutantApp.auth',
      'mutantApp.core',
      'mutantApp.layout'

  ])
  .config(configFunction);

  configFunction.$inject['$urlRouterProvider'];

  function configFunction($urlRouterProvider){
    $urlRouterProvider.otherwise('/');
  }
})();
