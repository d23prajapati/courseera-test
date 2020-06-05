(function(){
  'use strict';
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItemsDirective)
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

function FoundItemsDirective(){
  var ddo = {
    restrict:'E',
    templateUrl:"foundItems.html",
    scope:{foundItems:'<',onRemove:'&',title:'@title'},
    controller: FoundItemsDirectiveController,
    bindToController: true,
    controllerAs: 'list'
  }
  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  list.foundNothing = function () {
      return list.foundItems.length == 0;
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var narrow = this;
  var origTitle = "Found";
  narrow.title = "";
  narrow.found = [];

  narrow.getMenu = function(){
      narrow.found=[];
      if(narrow.searchTerm){
        var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
        promise.then(function(response){
          narrow.found = response;
          var length = narrow.found.length;
          narrow.title = origTitle + length + "items";
        })
        .catch(function error(){
          console.log("Something went terribly wrong with promise");
        });
      }
      else{
        var length = 0;
        narrow.title = origTitle + length + "items";
      }
  }

  narrow.remove = function(itemIndex){
    narrow.found.splice(itemIndex,1);
    var newLength = narrow.found.length;
    narrow.title = origTitle + length + "items";
  }
}

MenuSearchService.$inject = ['$http','ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
  var service = this;
  var list = [];

  service.getMatchedMenuItems = function(searchTerm){
    list = [];
    searchTerm = searchTerm.trim().toLowerCase();

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function success(result){
      var item = result.data.menu_items;
      for(var i=0; i<item.length; i++){
        if(item[i].description.toLowercase().indexOf(searchTerm)!=-1){
          list.push(item[i]);
        }
      }
      return list;
    },function error(){
      console.log("Error occured in $http");
    });
  };
}
})();
