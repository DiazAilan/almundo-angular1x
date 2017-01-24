(function() {
    'use strict';

    angular
        .module('almundoExam')
        .controller('MainCtrl', ['$scope', '$rootScope', '$location', '$route', '$routeParams', MainCtrl])

        function MainCtrl($scope, $rootScope, $location, $route, $routeParams) {
            $scope.$route = $route;
            $scope.$location = $location;
            $scope.$routeParams = $routeParams;
            
            $scope.dropdownMore = false;
        }
})();