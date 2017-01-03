(function (){
  'use strict';

  //Declare Angular Module
  angular.module('ShoppingListCheckOff', [])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  //Create once service, use it to inject
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var buy = this;

    buy.items = ShoppingListCheckOffService.getOriginalItems();
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){

  }

  function ShoppingListCheckOffService(){
    var service = this;

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

    service.getOriginalItems = function(){
      return originalItems;
    };

  }


})();
