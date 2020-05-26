(function(){
  'use script';
  angular.module('Msgapp',[])
  .controller('MsgController', MsgController);
  MsgController.$inject = ['$scope'];
  function MsgController($scope){
    $scope.name = "darshan";
    $scope.current = "off";
    $scope.sayMessage = function(){
      return "Click the button for on and off of light";
    };
    $scope.show = function(){
      $scope.current = "on";
    };
  }
})();
