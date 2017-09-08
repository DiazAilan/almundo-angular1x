angular.module('almundoExam')

.filter('starsFilter', function() {
	return function (input, filters) {
		let output = [];
		for(i = 0; i < input.length; i++) {
			if(input[i].stars === 5 && filters.stars.five) {
				output.push(input[i])
			} else if(input[i].stars === 4 && filters.stars.four) {
				output.push(input[i])
			} else if(input[i].stars === 3 && filters.stars.three) {
				output.push(input[i])
			} else if(input[i].stars === 2 && filters.stars.two) {
				output.push(input[i])
			} else if(input[i].stars === 1 && filters.stars.one) {
				output.push(input[i])
			} else if(filters.stars.all) {
				output.push(input[i])
			}
		}
		return output;
	}
})
.filter('priceFilter', function() {
	return function (input, filters) {
		let output = [];
		for(i = 0; i < input.length; i++) {
			if(input[i].price > filters.priceMin && input[i].price < filters.priceMax) {
				output.push(input[i])
			}
		}
		return output;
	}
})
.filter('regimenFilter', function() {
	return function (input, filters) {
		let output = [];
		for(i = 0; i < input.length; i++) {
			if(input[i].regimen.bedBrk && filters.regimen.bedBrk) {
				output.push(input[i])
			} else if(input[i].regimen.bed && filters.regimen.bed) {
				output.push(input[i])
			} else if(input[i].regimen.fullBrk && filters.regimen.fullBrk) {
				output.push(input[i])
			} else if(input[i].regimen.brk2 && filters.regimen.brk2) {
				output.push(input[i])
			} else if(input[i].regimen.brk && filters.regimen.brk) {
				output.push(input[i])
			} else if(filters.regimen.all) {
				output.push(input[i])
			}
		}
		return output;
	}
})
.filter('paymentFilter', function() {
	return function (input, filters) {
		let output = [];
		for(i = 0; i < input.length; i++) {
			if(input[i].payMethods.quota && filters.payMethods.quota) {
				output.push(input[i])
			} else if(input[i].payMethods.destination && filters.payMethods.destination) {
				output.push(input[i])
			} else if(filters.payMethods.all) {
				output.push(input[i])
			}
		}
		return output;
	}
});