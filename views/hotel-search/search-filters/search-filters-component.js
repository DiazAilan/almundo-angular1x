angular.module('almundoExam')
.controller('ComponentCtrl', ['$scope'], ComponentCtrl)

function ComponentCtrl($scope) {

	this.starsNum = function(stars) {
		return new Array(stars);
	}

}

angular.module('almundoExam')
.component('searchFilters', {
  templateUrl: 'views/hotel-search/search-filters/search-filters-component.html',
  bindings: {
  	filters: '='
  },
  controller: ComponentCtrl
});