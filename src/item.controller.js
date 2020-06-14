(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('itemDetailController',itemDetailController);

  itemDetailController.$inject = ['items'];
  function itemDetailController(items){
    var itemList = this;
    itemList.items = items;
  }
})();
