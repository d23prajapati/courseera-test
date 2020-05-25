(function(){
  'use strict';
  angular.module('capital',[])
  .controller('capitalController',function($scope,$filter){
    $scope.name = "darshan";

    $scope.upper = function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }
  };)
}

)();
