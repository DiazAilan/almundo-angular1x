angular.module('almundoExam')
.controller('ComponentCtrl', ['$scope'], ComponentCtrl)

function ComponentCtrl($scope) {

	$scope.starsNum = function(stars) {
		return new Array(stars);
	}

	$scope.getDiscount = function(hotelPrice, hotelPromotion) {
		return Math.round((1 - hotelPromotion/hotelPrice) * 100);
	}

}

angular.module('almundoExam')
.component('searchCard', {
  templateUrl: 'views/hotel-search/search-card/search-card-component.html',
  bindings: {
  	hotel: '='
  },
  controller: ComponentCtrl
});