'use strict';


// Declare app level module which depends on filters, and services
angular.module('stuffApp', [
  'ngRoute',
  'stuffAppServices',
  'stuffAppControllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/items', {templateUrl: 'partials/items.html', controller: 'ItemsCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/items'});
}]);
