'use strict';

angular.module('hackaton')
  .controller('HomeController', HomeController);

function HomeController ($scope, $state, HomeService) {

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

    $scope.novoPlano = () => {
        let sendPlano =
            {
            "serie" : $scope.data.serie,
            "theme" : $scope.tema,
            "objective":[{
                "text": $scope.objetivo
            }], 
            "content": $scope.conteudo,
            "procedure":[{
                "text": $scope.procedimento
                }],
            "strategy":[{
                    "text": $scope.estrategia
                }]
            };
        HomeService.createObjectClass(sendPlano).then((data) => {
            console.log(data);
    })
    .catch((err) => {
        $scope.errors = err.data;
    });
  }
}