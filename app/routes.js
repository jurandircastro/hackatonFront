'use strict';

angular.module('hackaton').config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('inicial', {
    url: '/home',
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })

});