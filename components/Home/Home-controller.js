(function () {
    'use strict';
    angular.module('homeView')
        .controller('homeViewCtrl', ['$scope', '$state', '$http', homeViewCtrl]);

    function homeViewCtrl($scope, $state, $http) {
        var homeViewCtrlVM = this;
		homeViewCtrlVM.judulMateri = null;       
		homeViewCtrlVM.penjelasanMateri = null;
		homeViewCtrlVM.penjelasanMateria = ["a","s","s","s","s"] 
		getDataFromJson();

        function getDataFromJson() {
    		$http({method: 'POST', url: 'json/data.json'}).success(function(data) {
   		   	homeViewCtrlVM.judulMateri  = data.pembahasan[0].asamBasa.judul;
   		   	homeViewCtrlVM.penjelasanMateri = data.pembahasan[0].asamBasa.materi;
   		   	console.log(homeViewCtrlVM.penjelasanMateri);
   		 });
  }
    }
})();