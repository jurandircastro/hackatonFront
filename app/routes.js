'use strict';

angular.module('hackaton').config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/inicial');

  $stateProvider
  .state('inicial', {
    url: '/inicial',
    templateUrl: 'views/inicial.html'
  });

});