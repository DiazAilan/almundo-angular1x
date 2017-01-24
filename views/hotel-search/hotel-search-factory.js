angular
	.module('almundoExam')
	.factory('hotelSearchFactory', function() {

		let hotels = [{
			"name" : "Hotel Emperador",
			"stars" : 3,
			"price" : 1921,
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
			"price" : 1876,
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
		},{
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
		},{
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
		}];

		let service = {
			place: 'Berlín',
			arriveDate: new Date(2017, 01, 20),
			leaveDate: new Date(2017, 01, 27),
			guests: '1',

			filters: {
				"nameShow": false,
				"priceShow": false,
				"starShow": false,
				"regimenShow": false,
				"payShow": false,
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
			},
			updateData: function(place, arrive, leave, guests) {
				this.place = place;
				this.arriveDate = arrive;
				this.leaveDate = leave;
				this.guests = guests
			},
			getHotels: function() {
				return hotels;
			}
		}

		return service;
	})