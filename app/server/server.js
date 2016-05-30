'use strict';

angular.module('server-monitor.server', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/server', {
    templateUrl: 'server/server.html',
    controller: 'SrvCtrl'
  });
}])

.controller('SrvCtrl', ['$scope','$routeParams', function($scope, $routeParams) {
  $scope.server = $routeParams.id
  $scope.parameters = [
    {id: 'Pedidos Suministro', status: true, description: 'La última actualización fue hace mas de 20 minutos', updated: '2016-05-19 12:00:00' },
    {id: 'Facturas', status: false, description: 'La última actualización fue hace mas de 1 hora', updated: '2016-05-19 14:00:00' },
    {id: 'Recibos', status: false, description: 'La última actualización fue hace mas de 1 hora', updated: '2016-05-19 14:00:00' },
    {id: 'Pedidos Origen Orbis', status: true, description: 'La última actualización fue hace mas de 1 hora', updated: '2016-05-19 14:00:00' }
  ]

  $scope.setClass = function(value){
    if(value){
      return 'status-ok'
    }
    return 'status-error'
  }

  $scope.viewDetail = function(id){
    document.location = '#/table?id=' + id;
  }
}]);