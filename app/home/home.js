'use strict';

angular.module('server-monitor.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.servers = [
      { title: 'Server 1', status: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eum nulla illum, corporis nihil doloribus. In, repellat saepe. Rerum iure adipisci incidunt eveniet iste natus suscipit sed sint officiis porro!' },
      { title: 'Server 2', status: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eum nulla illum, corporis nihil doloribus. In, repellat saepe. Rerum iure adipisci incidunt eveniet iste natus suscipit sed sint officiis porro!' },
      { title: 'Server 3', status: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eum nulla illum, corporis nihil doloribus. In, repellat saepe. Rerum iure adipisci incidunt eveniet iste natus suscipit sed sint officiis porro!' },
      { title: 'Server 4', status: false, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eum nulla illum, corporis nihil doloribus. In, repellat saepe. Rerum iure adipisci incidunt eveniet iste natus suscipit sed sint officiis porro!' },
      { title: 'Server 5', status: false, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eum nulla illum, corporis nihil doloribus. In, repellat saepe. Rerum iure adipisci incidunt eveniet iste natus suscipit sed sint officiis porro!' },
      { title: 'Server 6', status: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eum nulla illum, corporis nihil doloribus. In, repellat saepe. Rerum iure adipisci incidunt eveniet iste natus suscipit sed sint officiis porro!' }
    ]
    $scope.servers.forEach(function (value) {
      if (value.status) {
        value.image = 'images/server-ok.png'
      }
      else {
        value.image = 'images/server-error.png'
      }
    });

    $scope.viewServer = function(id){
      document.location = '#/server?id=' + id
    }
  }]);