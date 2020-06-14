(function(){
  'use strict';

  angular.module('MenuApp')
  .component('category',{
    templateUrl:"src/templates/category.template.html",
    bindings:{
      categories: '<'
    }
  });
})();
