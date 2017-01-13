

    angular
        .module('almundoExam')
        .controller('HotelSearchCtrl', ['$scope', '$rootScope', '$location', '$route', '$routeParams', HotelSearchCtrl])

        function HotelSearchCtrl($scope, $rootScope, $location, $route, $routeParams) {
            $scope.$route = $route;
            $scope.$location = $location;
            $scope.$routeParams = $routeParams;

            $scope.sortOrder = "stars";
            $scope.sort = {
            	order: "stars",
            	reverse: true
            }
            
            $scope.editSearchShow = false;
            $scope.filterShow = false;
            $scope.placeSearch = "Berlín";
            $scope.arriveDate = new Date(2017, 01, 20);
            $scope.leaveDate = new Date(2017, 01, 27);
            $scope.guests = "2";

            $scope.hotels = [{
				"name" : "Hotel Emperador",
				"stars" : 3,
				"price" : 1596,
				"promotion": undefined,
				"img": "emperador.jpg",
				"recomended": true,
				"services": {
					"bar": true,
					"beach": true,
					"checkin": true,
					"breakfast": true,
					"gym": true,
					"clean": true,
					"wifi": false,
					"tv": false,
					"admin": false
				},
				"payMethods": {
					"quota": true,
					"destination": true
				}
			},
			{
				"name" : "Petit Palace San Bernardo",
				"stars" : 4,
				"price" : 2145,
				"promotion": undefined,
				"img": "petit-palace.jpg",
				"recomended": true,
				"services": {
					"bar": false,
					"beach": true,
					"checkin": true,
					"breakfast": false,
					"gym": false,
					"clean": true,
					"wifi": true,	
					"tv": true,
					"admin": true
				},
				"payMethods": {
					"quota": false,
					"destination": true
				}
			},
			{
				"name" : "Hotel Nuevo Boston",
				"stars" : 2,
				"price" : 1118,
				"promotion": 861,
				"img": "boston.jpg",
				"recomended": false,
				"services": {
					"bar": true,
					"beach": true,
					"checkin": true,
					"breakfast": true,
					"gym": true,
					"clean": false,
					"wifi": false,
					"tv": false,
					"admin": true
				},
				"payMethods": {
					"quota": true,
					"destination": false
				}
			}]

			$scope.filters = {
				"nameShow": false,
				"priceShow": false,
				"starShow": false,
				"regimenShow": false,
				"payShow": false,
				"stars": {
					"all": true,
					"five": false,
					"four": false,
					"three": false,
					"two": false,
					"one": false
				},
				"regimen": {
					"all": true,
					"bedBrk": false,
					"bed": false,
					"fullBrk": false,
					"brk2": false,
					"brk": false
				},
				"payMethods": {
					"all": true,
					"quota": false,
					"destination": false
				}
			}

			$scope.switchSort = function(sortOrder) {

	        	switch(sortOrder) {
		    		case 'stars':
		    			$scope.sort = {
		    				order: "stars",
		    				reverse: true
		    			}
	    			break;
		    		case 'priceH':
		    			$scope.sort = {
		    				order: "price",
		    				reverse: true
		    			}
	    			break;
		    		case 'priceL':
		    			$scope.sort = {
		    				order: "price",
		    				reverse: false
		    			}
	    			break;
	        	}
	        }

        }