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
            getMeusPlanos();
            console.log(data);
        })
        .catch((err) => {
        $scope.errors = err.data;
        });
  }

  let getPlanos = () => {
    HomeService.allObjectClassOthersTeachers().then((data) => {
        $scope.getPlanos = data.data;
        console.log(data.data);
    })
    .catch((err) => {
        $scope.errors = err.data;
    });
  }

  let getMeusPlanos = () => {
    HomeService.allMyObjectClass().then((data) => {
        $scope.getMeusPlanos = data.data;
        console.log(data.data);
    })
    .catch((err) => {
        $scope.errors = err.data;
    });
  }

    $scope.copiarPlano = (plano) => {
        let planoAtual = plano;
        let copiarPlano =
            {
            "id": planoAtual.id,
            "serie" : planoAtual.serie,
            "theme" : planoAtual.tema,
            "objective":[{
                "text": planoAtual.objetivo
            }], 
            "content": planoAtual.conteudo,
            "procedure":[{
                "text": planoAtual.procedimento
                }],
            "strategy":[{
                    "text": planoAtual.estrategia
                }]
            };
        HomeService.copyObjectClass(copiarPlano, planoAtual.id).then((data) => {
            getMeusPlanos();
            console.log(data);
        })
        .catch((err) => {
        $scope.errors = err.data;
        });
  }

  $scope.deletePlano = (id) => {
      console.log(id);
        HomeService.objectClasses(id).then((data) => {
            getMeusPlanos();
            console.log(data);
        })
        .catch((err) => {
        $scope.errors = err.data;
        });
  }

  getMeusPlanos();
  getPlanos();
}