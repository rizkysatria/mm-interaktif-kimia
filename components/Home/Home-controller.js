(function () {
    'use strict';
    angular.module('homeView')
        .controller('homeViewCtrl', ['$scope', '$state', '$http', '$sce', homeViewCtrl]);

    function homeViewCtrl($scope, $state, $http, $sce) {
      var homeViewCtrlVM = this;
		  homeViewCtrlVM.dataComplete = null;
      homeViewCtrlVM.penjelasanMateri = null; 
      homeViewCtrlVM.buttonMenuUtamaCLicked = buttonMenuUtamaCLicked;
      homeViewCtrlVM.showContent = showContent;
      homeViewCtrlVM.selectedMenuUtama = null;
      homeViewCtrlVM.selectedSubMenu = null;
      homeViewCtrlVM.selectedTemplate = null;

		  getDataFromJson();

      function getDataFromJson() {
      	$http({method: 'POST', url: 'json/data.json'}).success(function(data) {
     	   	homeViewCtrlVM.dataComplete = data.materi;
     	   });
      }

      function buttonMenuUtamaCLicked(id) {
        homeViewCtrlVM.selectedMenuUtama = id;
        for (var i = 0; i < homeViewCtrlVM.dataComplete.length; i++) {
          if (homeViewCtrlVM.dataComplete[i].id === id) {
            homeViewCtrlVM.penjelasanMateri = homeViewCtrlVM.dataComplete[i];
          }
        }
      }

      function showContent(subMateri) {

        if (subMateri) {
          homeViewCtrlVM.selectedTemplate = $sce.trustAsHtml(subMateri);
        }
        
      }
    }
})();