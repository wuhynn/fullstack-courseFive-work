(function (){
  'use strict';

  //Declare Angular Module
  angular.module('ShoppingListCheckOff', [])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  //Create once service, use it to inject
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  //ToBuyController and inject service
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var buy = this;

    //Use for displaying to buy list of items
    buy.originalItems = ShoppingListCheckOffService.getOriginalItems();

    //Use removeItem function
    buy.removeItem = function(index){
      ShoppingListCheckOffService.removeItem(index);

    };
  }

  //AlreadyBoughtController and inject the service
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;

    //Used to display bought items
    bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService(){
    var service = this;

    //The initial items on the list
    var originalItems = [
      {
        name: "Cookies",
        quantity: "10"
      },
      {
        name: "Bananas",
        quantity: "5"
      },
      {
        name: "Chicken wings",
        quantity: "9"
      },
      {
        name: "Donuts",
        quantity: "12"
      },
      {
        name: "Apples",
        quantity: "6"
      }
    ];

    //Used in the AlreadyBought Context
    var boughtItems = [];

    //For displaying the items
    service.getOriginalItems = function(){
      return originalItems;
    };

    //For displaying bought items
    service.getBoughtItems = function(){
      return boughtItems;
    };

    //Removing the items
    service.removeItem = function(index){
      //push onto the boughtItems array
      boughtItems.push(originalItems[index]);

      //remove
      originalItems.splice(index, 1);
    };
  }


})();
//IEFE
