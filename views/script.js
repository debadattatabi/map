var map;

function initMap() {
	
	var brookfields = {
		info: '<strong>Moovlee.com</strong><br>\
					Incubes, Next to Mc Donalds,<br> ITPL Main Road, Bangalore<br>\
					<a href="https://goo.gl/maps/wdFxX1frCiB2">Get Directions</a>',
		lat: 12.967140739761813,
		long: 77.71658985498652
	};

	var whitefield = {
		info: '<strong>Post Office</strong><br>\
					Borewell Road,Dodsworth Layout,<br> Whitefield,Bengaluru<br>\
					<a href="https://goo.gl/maps/hAoRpxjLdDu">Get Directions</a>',
		lat: 12.966262,
		long: 77.735129
	};

	var siddapura = {
		info: '<strong>Mainland China</strong><br>\r\
					28/2, 1st Floor, Primus Building, Near Dmart,<br> Siddapura, Whitefield Main Road,<br>Thubarahalli,<br> Whitefield,Bengaluru<br>\
					<a href="https://goo.gl/maps/AHoDpq6qxgo">Get Directions</a>',
		lat: 12.957333,
		long: 77.7232414
	};

	var locations = [
      [brookfields.info, brookfields.lat, brookfields.long, 0],
      [whitefield.info, whitefield.lat, whitefield.long, 1],
      [siddapura.info, siddapura.lat, siddapura.long, 2],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: new google.maps.LatLng(12.967140739761813, 77.71658985498652),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}