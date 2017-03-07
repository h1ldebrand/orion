			function initMap() {
        var myLatLng = {lat: 47.6541762, lng: 23.5684891};

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          scrollwheel: false,
          zoom: 16
        });

				var image = new google.maps.MarkerImage(
					'img/marker.png',
					new google.maps.Size(21,26),
					new google.maps.Point(0,0),
					new google.maps.Point(0,21)
				);

				var marker = new google.maps.Marker({
 					icon: image,
 				  map: map,
 				  position: myLatLng
 				});

					var contentString =
					'<div class="map__content">'+
						'<h4 class="map__address">Blue Avenue #33, King Leonardo 33821</h4>'+
							'<div class="map__phone">+82394 5940</div>'+
						'</div>';

				var infowindow = new google.maps.InfoWindow({
			    content: contentString
			  });

			  marker.addListener('click', function() {
					infowindow.open(map, marker);
				});
			}