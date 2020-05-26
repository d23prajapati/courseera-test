(function(){
  'use strict';
  angular.module('LunchCheck',[])
.controller('LunckCheckController',LunchCheckController);
  LunckCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.name = "Enter";
  $scope.check = function(){
    var string = $scope.name;
    var arr = string.split('');
    if(arr.length<=3)
      {$scope.name="Enjoy!";}
      else {
        $scope.name="Too much";
      }
    };
  }
})();
