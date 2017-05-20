'use strict';

angular.module('hackaton')
  .factory('HomeService', HomeService);

function HomeService($http, $q, httpRequest) {
    const factory = {
        createObjectClass: (data) => {
            const url = '/createObjectClass/' + "1";
            const method = 'POST';
            return httpRequest(url, method, data, $q, $http);
        },
    };
    return factory;
}