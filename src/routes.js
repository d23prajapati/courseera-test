(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider){
    //Default home
    $urlRouterProvider.otherwise('/');
    //home page
    $stateProvider.state('home',{
      url:'/',
      templateUrl: 'src/templates/home.template.html'
    })
    //categories page
    .state('categories',{
      url:'/categories',
      templateUrl:'src/templates/category.template.html',
      controller:'categoryController as categorieslist',
      resolve:{
        categories:['MenuDataService',function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })
    //item details
    .state('categories.itemDetails',{
      url:'/item-detail/{categoryShortName}',
      templateUrl:'src/templates/item.template.html',
      controller:'itemDetailController as itemList',
      params:{
        categoryShortName: null
      },
      resolve:{
        items:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }
})();
