(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.item="";
    $scope.message="";
    $scope.splitItem = function(){
      var arr = $scope.item.split(",");

      if($scope.item=="")
              {$scope.message="Please enter data first!";}
      else if(arr.length <= 3)
              {$scope.message="Enjoy!";}
      else {$scope.message="Too much!";}
    };
  }
})();
