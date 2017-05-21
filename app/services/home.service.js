'use strict';

angular.module('hackaton')
  .factory('HomeService', HomeService);

function HomeService($http, $q, httpRequest) {
    const factory = {
        createObjectClass: (data) => {
<<<<<<< HEAD
            const url = '/createObjectClass/' + "5";
            const method = 'POST';
            return httpRequest(url, method, data, $q, $http);
        },
          allMyObjectClass: (data) => {
            const url = '/allMyObjectClass/' + "5";
=======
            const url = '/createObjectClass/' + "2";
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
>>>>>>> 38192bddff124fb03691d6d034f10fb3fd803dcd
            const method = 'GET';
            return httpRequest(url, method, data, $q, $http);
        },
        
    };
    return factory;
}