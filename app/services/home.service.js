'use strict';

angular.module('hackaton')
  .factory('HomeService', HomeService);

function HomeService($http, $q, httpRequest) {
    const factory = {
        novoAprovacaoFile: (data) => {
            const url = '/new_acceptance';
            const method = 'POST';
            return httpRequest(url, method, data, $q, $http);
        },
    };
    return factory;
}