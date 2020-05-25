(function(){
  'use script';
  angular.module('Msgapp',[])
  .controller('MsgController', MsgController);
  MsgController.$inject = ['$scope'];
  function MsgController($scope){
    $scope.name = "darshan";

    $scope.sayMessage = function(){
      return "darshan likes to eat spicy";
    };
  }
})();
