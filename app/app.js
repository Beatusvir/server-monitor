'use strict';

// Declare app level module which depends on views, and components
angular.module('server-monitor', [
  'ngRoute',
  'server-monitor.home',
  'server-monitor.server',
  'server-monitor.table',
  'server-monitor.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
