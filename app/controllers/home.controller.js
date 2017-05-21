'use strict';

angular.module('hackaton')
  .controller('HomeController', HomeController);

function HomeController ($scope, $state, Upload, HomeService) {

    $scope.criarPlano = false;
    $scope.editarPlano = false;

    $scope.btnAbrirEdit = () => {
        $scope.editarPlano = !$scope.editarPlano;
    }

    $scope.btnEdit = (plano) => {
        $scope.planoAtual = plano;
    }

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
            "strategys":[{
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
            "strategys":[{
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

    $scope.submit = () =>{
      if ($scope.form.file.$valid && $scope.file) {
           $scope.upload($scope.file);
      }
  };

  $scope.upload = function (file) {
    let projetoAtual = StorageService.getItem('idProjeto');
    Upload.upload({
        url: 'http://api-hackathon.herokuapp.com/file',
        data: {file: file, 'project_id': projetoAtual}
    }).then(function (resp) {
        setPathScreenPlay(resp.data);
    }, function (resp) {
        console.log('Error status: ' + resp.status);
    }, function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    });
  };

  $scope.editPlano = () => {
        let sendPlano =
            {
            "id": $scope.planoAtual.id,
            "serie" : $scope.planoAtual.serie,
            "theme" : $scope.planoAtual.theme,
            "objective":[{
                "text": $scope.planoAtual.objective
            }], 
            "content": $scope.planoAtual.content,
            "procedure":[{
                "text": $scope.planoAtual.procedure
                }],
            "strategys":[{
                    "text": $scope.planoAtual.strategys
                }]
            };
        HomeService.editObjectClass(sendPlano).then((data) => {
            getMeusPlanos();
            console.log(data);
        })
        .catch((err) => {
        $scope.errors = err.data;
        });
  }


  $scope.hashtag = 'matematica';

  getMeusPlanos();
  getPlanos();
}