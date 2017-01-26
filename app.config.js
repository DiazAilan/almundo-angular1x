(function() {
    'use strict';

    angular
        .module('almundoExam')
        .config(function($locationProvider, $routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: '/angular-almundo1x/views/hotel-search/hotel-search.html',
                    controller: 'HotelSearchCtrl'
                })
                .when('/hoteles/:id', {
                    templateUrl: '/angular-almundo1x/views/hotel-search/hotel-search.html',
                    controller: 'HotelSearchCtrl'
                })
                .otherwise({templateUrl:'/angular-almundo1x/views/error.html'});

            $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
        })
})();