(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('categoryController',categoryController);

  categoryController.$inject = ['MenuDataService','categories'];
  function categoryController(MenuDataService,categories){
    var categorieslist = this;
    categorieslist.categories = categories;
  }
})();
