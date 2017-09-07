(function(){

    'use strict';
    angular.module('homeView',[]);
    angular.module('MmInteraktifKimia', [
        /*

         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * it's components are available.
         *

         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'ngResource',
        'ngAnimate',
        'ui.router', 
        'anim-in-out',
        'slick',
        'angularMoment',
        'angular-iscroll',
        'ui.bootstrap',
        'homeView',
    ])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                // ___url___ : 'variable url',
                url: '/',
                // ___templateUrl___ : 'variable templateUrl',
                templateUrl: 'page/homePage/home-page.html',
                // ___controller___ : 'variable controller',
                controller: 'homePageCtrl'
            });
        }]);

})();