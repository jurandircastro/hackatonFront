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
        allObjectClassOthersTeachers: (data) => {
            const url = '/allObjectClassOthersTeachers/' + "1";
            const method = 'GET';
            return httpRequest(url, method, data, $q, $http);
        },
        allMyObjectClass: (data) => {
            const url = '/allMyObjectClass/' + "1";
            const method = 'GET';
            return httpRequest(url, method, data, $q, $http);
        },
        copyObjectClass: (data, id) => {
            const url = '/copyObjectClass/' + "1/" + id;
            const method = 'GET';
            return httpRequest(url, method, data, $q, $http);
        },
        
    };
    return factory;
}