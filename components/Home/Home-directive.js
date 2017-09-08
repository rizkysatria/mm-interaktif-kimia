(function () {
    'use strict';
    angular.module('homeView')
        .directive('homeView', ['$state', homeView]);

    function homeView($state) {
        return {
            templateUrl: 'components/home/Home-template.html',
            controller: 'homeViewCtrl',
            controllerAs: 'homeVM',
            restrict: 'E',
            link: linkFunc
        };

        function linkFunc(scope) {
        }
    } 
})();