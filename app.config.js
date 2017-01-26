(function() {
    'use strict';

    angular
        .module('almundoExam')
        .config(function($locationProvider, $routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: '/almundo-angular1x/views/hotel-search/hotel-search.html',
                    controller: 'HotelSearchCtrl'
                })
                .when('/hoteles/:id', {
                    templateUrl: '/almundo-angular1x/views/hotel-search/hotel-search.html',
                    controller: 'HotelSearchCtrl'
                })
                .otherwise({templateUrl:'/almundo-angular1x/views/error.html'});

            $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
        })
})();