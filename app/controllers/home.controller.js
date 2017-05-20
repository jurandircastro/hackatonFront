'use strict';

angular.module('hackaton')
  .controller('HomeController', HomeController);

function HomeController ($scope, $state) {

    $scope.criarPlano = false;

    $scope.planos = () => {
      $('html, body').animate({ scrollTop: $("#planos").height() + $("#mainNav").height() }, 'slow');
    }

    $scope.botaoCriarPlano = () => {
        $scope.criarPlano = !$scope.criarPlano;
    }
}