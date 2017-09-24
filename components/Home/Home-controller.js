(function () {
    'use strict';
    angular.module('homeView')
        .controller('homeViewCtrl', ['$scope', '$state', '$http', homeViewCtrl]);

    function homeViewCtrl($scope, $state, $http) {
      var homeViewCtrlVM = this;
		  homeViewCtrlVM.dataComplete = null;
      homeViewCtrlVM.penjelasanMateri = null; 
      homeViewCtrlVM.buttonMenuUtamaCLicked = buttonMenuUtamaCLicked;
      homeViewCtrlVM.loadTemplate = loadTemplate;
      homeViewCtrlVM.loadTemplateSubJudul = loadTemplateSubJudul;
      homeViewCtrlVM.isOpen = false;
      homeViewCtrlVM.isOpenSubmenu = false;
      homeViewCtrlVM.selectedMenuUtama = null;

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

      function loadTemplate(template, isOpen) {
        if (!isOpen) {
          homeViewCtrlVM.isOpenSubmenu = false;
        }

        if (template && isOpen && !homeViewCtrlVM.isOpenSubmenu || !isOpen && !homeViewCtrlVM.isOpenSubmenu ) {
          var container = $('.dynamic-content');
          container.html("");
          console.log(container.html())
          container.html(template);
          console.log(container.html())
          var newScope = angular.element(container).scope();
          var compile = angular.element(container).injector().get('$compile');
          compile($(container).contents())(newScope);
        }
      }

      function loadTemplateSubJudul(template, isOpen) {
        homeViewCtrlVM.isOpenSubmenu = isOpen;
         if (template && isOpen) {
          var container = $('.dynamic-content');
          container.html("");
          console.log(container.html())
          container.html(template);
          console.log(container.html())
          var newScope = angular.element(container).scope();
          var compile = angular.element(container).injector().get('$compile');
          compile($(container).contents())(newScope);
        }
      }
    }
})();