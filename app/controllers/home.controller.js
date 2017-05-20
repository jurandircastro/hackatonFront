'use strict';

angular.module('hackaton')
  .controller('HomeController', HomeController);

function HomeController ($scope, $state) {

    $scope.criarPlano = false;

    $scope.planos = () => {
      $('html, body').animate({ scrollTop: $("#planos").height() + $("#mainNav").height() }, 'slow');
    }

    $scope.btnAbrirFormPlano = () => {
        $scope.criarPlano = true;
    }

    $scope.btnFecharFormPlano = () => {
        $scope.criarPlano = false;
    }
}