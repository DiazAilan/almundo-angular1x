angular
	.module('almundoExam')
	.factory('hotelSearchFactory', function() {

		let hotels = [{
			"name" : "Hotel Emperador",
			"stars" : 3,
			"price" : 1921,
			"oldPrice": undefined,
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
			"regimen": {
				"bedBrk": false,
				"bed": true,
				"fullBrk": false,
				"brk2": false,
				"brk": false
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
			"oldPrice": undefined,
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
			"regimen": {
				"bedBrk": false,
				"bed": true,
				"fullBrk": false,
				"brk2": false,
				"brk": false
			},
			"payMethods": {
				"quota": false,
				"destination": true
			}
		},
		{
			"name" : "Hotel Nuevo Boston",
			"stars" : 2,
			"price" : 861,
			"oldPrice": 1118,
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
			"regimen": {
				"bedBrk": false,
				"bed": true,
				"fullBrk": false,
				"brk2": false,
				"brk": false
			},
			"payMethods": {
				"quota": true,
				"destination": false
			}
		},{
			"name" : "Hotel Hard Rock",
			"stars" : 5,
			"price" : 2120,
			"oldPrice": 2226,
			"img": "hard-rock.jpg",
			"recomended": true,
			"services": {
				"bar": true,
				"beach": false,
				"checkin": true,
				"breakfast": true,
				"gym": true,
				"clean": false,
				"wifi": true,
				"tv": true,
				"admin": false
			},
			"regimen": {
				"bedBrk": false,
				"bed": true,
				"fullBrk": false,
				"brk2": false,
				"brk": false
			},
			"payMethods": {
				"quota": true,
				"destination": true
			}
		},{
			"name" : "Hotel Sofitel",
			"stars" : 4,
			"price" : 1410,
			"oldPrice": 1680,
			"img": "sofitel.jpg",
			"recomended": false,
			"services": {
				"bar": true,
				"beach": false,
				"checkin": true,
				"breakfast": true,
				"gym": true,
				"clean": true,
				"wifi": true,
				"tv": false,
				"admin": false
			},
			"regimen": {
				"bedBrk": false,
				"bed": true,
				"fullBrk": false,
				"brk2": false,
				"brk": false
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
			guests: '2',

			filters: {
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
			},
			updateData: function(place, arrive, leave, guests) {
				this.place = place;
				this.arriveDate = arrive;
				this.leaveDate = leave;
				this.guests = guests
			},
			getHotels: function() {
				return hotels;
			},
			resetFilters: function() {
				this.filters.name = "";
				console.log("working")
			}
		}

		return service;
	})