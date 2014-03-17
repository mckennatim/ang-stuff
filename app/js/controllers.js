'use strict';

/* Controllers */

var stuffAppControllers = angular.module('stuffAppControllers', []);

stuffAppControllers.controller('ItemsCtrl', function ($scope) {
  $scope.dog = 'mutt';
});

stuffAppControllers.controller('TimeCtrl', function ($scope) {
  $scope.timestamp=Date.now();
  $scope.tubmit = function() {
    $scope.timestamp=Date.now();
  };
  console.log($scope.timestamp);
});

stuffAppControllers.controller('InpCtrl', function ($scope, ItemsData, $filter) {
  var list= $scope.list = ItemsData.get();
  $scope.$watch('list', function(newValue, oldValue){
    $scope.cnt = $filter('filter')(list, {done:false}).length;
    if (newValue !== oldValue) { // This prevents unneeded calls to the local storage
      ItemsData.put(list);
    }
  }, true);
  $scope.query='';
  $scope.rubmit = function(){
    if ($scope.query) {
      $scope.list.push({lid:26, product:this.query, done:false});
      $scope.query = '';
     }
  };
  $scope.clearTbox = function(){$scope.query = '';};
  $scope.remove= function(item){
    console.log(item.product);
    var idx = $scope.list.indexOf(item);
    $scope.list.splice(idx,1);
    console.log(idx);
  };
});

