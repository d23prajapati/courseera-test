(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('itemDetailController',itemDetailController);

  itemDetailController.$inject = ['$stateParams','items'];
  function itemDetailController($stateParams,items){
    var itemList = this;
    itemList.items = items;
  }
})();
