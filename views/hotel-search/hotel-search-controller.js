    angular
        .module('almundoExam')
        .controller('HotelSearchCtrl', ['$scope', '$rootScope', '$location', '$route', '$routeParams', 'hotelSearchFactory', HotelSearchCtrl])

        function HotelSearchCtrl($scope, $rootScope, $location, $route, $routeParams, hotelSearchFactory) {
            $scope.$route = $route;
            $scope.$location = $location;
            $scope.$routeParams = $routeParams;

            $scope.hotels = hotelSearchFactory.getHotels();

			$scope.filters = hotelSearchFactory.filters;

            $scope.sortOrder = "starsH";
            $scope.sort = {
            	order: "stars",
            	reverse: true
            }
            
            $scope.editSearchShow = false;
            $scope.filterShow = false;
            $scope.showSearchOptions = false;

            $scope.placeSearch = hotelSearchFactory.place;
            $scope.arriveDate = hotelSearchFactory.arriveDate;
            $scope.leaveDate = hotelSearchFactory.leaveDate;
            $scope.guests = hotelSearchFactory.guests;

			$scope.toggleSearch = function() {
				$scope.showSearchOptions = !$scope.showSearchOptions;
			}

			$scope.newSearch = function() {
				hotelSearchFactory.updateData($scope.placeSearch, $scope.arriveDate, $scope.leaveDate, $scope.guests);
				$scope.showSearchOptions = !$scope.showSearchOptions;
			}

			$scope.switchSort = function(sortOrder) {

	        	switch(sortOrder) {
		    		case 'starsH':
		    			$scope.sort = {
		    				order: "stars",
		    				reverse: true
		    			}
	    			break;
	    			case 'starsL':
	    				$scope.sort = {
	    					order: "stars",
	    					reverse: false
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
	        $scope.filters.disableAllStars = function() {
	        	$scope.filters.stars.all = false;
	        }
	        $scope.filters.disableSpecificStars = function() {
	        	$scope.filters.stars.five = false;
	        	$scope.filters.stars.four = false;
	        	$scope.filters.stars.three = false;
	        	$scope.filters.stars.two = false;
	        	$scope.filters.stars.one = false;
	        }
	        $scope.filters.disableAllReg = function() {
	        	$scope.filters.regimen.all = false;
	        }
	        $scope.filters.disableSpecificReg = function() {
	        	$scope.filters.regimen.bedBrk = false;
	        	$scope.filters.regimen.bed = false;
	        	$scope.filters.regimen.fullBrk = false;
	        	$scope.filters.regimen.brk2 = false;
	        	$scope.filters.regimen.brk = false;
	        }
	        $scope.filters.disableAllPay = function() {
	        	$scope.filters.payMethods.all = false;
	        }
	        $scope.filters.disableSpecificPay = function() {
	        	$scope.filters.payMethods.quota = false;
	        	$scope.filters.payMethods.destination = false;
	        }
	        $scope.resetFilters = function() {
	        	$scope.filters = {
					"nameShow": true,
					"priceShow": true,
					"starShow": true,
					"regimenShow": true,
					"payShow": true,
					"name": "",
					"targetName": "",
					"priceMin": 200,
					"priceMax": 2500,
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
	        }

        }