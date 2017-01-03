(function (){
  'use strict';

  var toBuyList = [
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

  //Declare Angular Module
  angular.module('ShoppingListCheckOff', [])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope', '$injector'];

  function ToBuyController($scope, $injector){
    $scope.toBuyList = toBuyList;
  }


})();
