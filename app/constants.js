angular.module('Teste')
  .constant('httpRequest', httpRequest);

function httpRequest(url, method, data, $q, $http) {
  const deferred = $q.defer();
  const baseUrl = 'https:///v3/';

  var mailgunApiKey = window.btoa("api:key-a3b4c20ce0277d7d128e5829aad5e0d1")

  $http({
    method: method,
    url: baseUrl + url + "/messages",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Authorization": "Basic " + mailgunApiKey
      },
    data: data
  })
  .then((data, status, headers, config) => {
    deferred.resolve(data);
  })
  .catch((data, status, headers, config) => {
    deferred.reject(data);
  });

  return deferred.promise;
}