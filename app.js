(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;
  buy.items = ShoppingListCheckOffService.getToBuyList();

  buy.removeItem = function(itemIndex,itemName,itemQuantity){
    ShoppingListCheckOffService.addToBoughtList(itemName,itemQuantity);
    ShoppingListCheckOffService.removeFromToBuyList(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtList();
}
  function ShoppingListCheckOffService(){
    var service = this;

      var shoppingList = [
        {
          name: "Cookies",
          quantity: "10"
        },
        {
          name: "Chips",
          quantity: "5"
        },
        {
          name: "Biscuits",
          quantity: "6"
        },
        {
          name: "Cold drinks",
          quantity: "15"
        },
        {
          name: "Noodles",
          quantity: "20"
        },
      ];

      var toBuyList = shoppingList;
      var bought = [];

      service.getToBuyList = function(){
        return toBuyList;
      };

      service.removeFromToBuyList = function(itemIndex){
        toBuyList.splice(itemIndex,1);
      };

      service.getBoughtList = function(){
        return bought;
      };

      service.addToBoughtList = function(itemName,itemQuantity){
        var item = {
          name: itemName,
          quantity: itemQuantity
        };
        bought.push(item);
      };


  }
})();
