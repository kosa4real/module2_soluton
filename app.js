(function (){
  'use strict';
  angular.module("ShoppingListCheckOff",[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    
    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

    toBuy.removeItem = function(itemIndex){
      ShoppingListCheckOffService.removeItem(itemIndex);
    } 
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;
    
    alreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
  }

  function ShoppingListCheckOffService (){
    var service = this;

      var itemsToBuy = [
      {
        name: "sugar",
        quantity: 1
      },
      {
        name: "bread",
        quantity: 3
      },
      {
        name: "jam",
        quantity: 1
      },
      {
        name: "cookies",
        quantity: 3
      },
      {
        name: "noodles",
        quantity: 5
      }
      
      ];
    var alreadyBoughtItems = [];
    

      service.removeItem = function(itemIndex){
        var removedItem = itemsToBuy.splice(itemIndex,1);
        alreadyBoughtItems.push(removedItem);
        console.log(alreadyBoughtItems);
    }

    service.getItemsToBuy = function(){
      return itemsToBuy;
    };

    service.getItemsAlreadyBought = function(){
      return alreadyBoughtItems;
    };

  }

})();