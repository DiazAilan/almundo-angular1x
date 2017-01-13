angular.module('almundoExam')
.controller('ComponentCtrl', ['$scope'], ComponentCtrl)

function ComponentCtrl($scope) {

	this.starsNum = function(stars) {
		return new Array(stars);
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