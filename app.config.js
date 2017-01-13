(function() {
    'use strict';

    angular
        .module('almundoExam')
        .config(function($locationProvider, $routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: '/views/hotel-search/hotel-search.html',
                    controller: 'HotelSearchCtrl'
                })
                .when('/hoteles/:id', {
                    templateUrl: '/views/hotel-search/hotel-search.html',
                    controller: 'HotelSearchCtrl'
                })
                .otherwise({templateUrl:'/views/error.html'});

            $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
        })
})();