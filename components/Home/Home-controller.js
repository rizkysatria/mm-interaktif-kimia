(function () {
    'use strict';
    angular.module('homeView')
        .controller('homeViewCtrl', ['$scope', '$state', '$http', homeViewCtrl]);

    function homeViewCtrl($scope, $state, $http) {
      var homeViewCtrlVM = this;
		  homeViewCtrlVM.dataComplete = null;
      homeViewCtrlVM.penjelasanMateri = null; 
      homeViewCtrlVM.buttonMenuUtamaCLicked = buttonMenuUtamaCLicked;
		  getDataFromJson();

      function getDataFromJson() {
      	$http({method: 'POST', url: 'json/data.json'}).success(function(data) {
     	   	homeViewCtrlVM.dataComplete = data.materi;
     	   });
      }

      function buttonMenuUtamaCLicked(id) {
        for (var i = 0; i < homeViewCtrlVM.dataComplete.length; i++) {
          if (homeViewCtrlVM.dataComplete[i].id === id) {
            homeViewCtrlVM.penjelasanMateri = homeViewCtrlVM.dataComplete[i];
          }
        }
      }
    }
})();