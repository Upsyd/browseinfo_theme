		(function($) {
		  "use strict";
			var locations = [
			['<div class="infobox"><h3 class="title"><a href="#">OUR INDIA OFFICE</a></h3><span>A-310, Siddhi Vinayak Tower, Near Kataria Arcade, B/h Jaguar Showroom, Prahaladnagar Extension, Makarba, Ahmedabad 380051 - Gujarat - India.</span><br>(+91) 9978020412</p></div></div></div>', 22.996348, 72.4996966, 2]
			];
		
			var map = new google.maps.Map(document.getElementById('map'), {
			  zoom: 10,
				scrollwheel: false,
				navigationControl: true,
				mapTypeControl: false,
				scaleControl: false,
				draggable: true,
			
				center: new google.maps.LatLng(22.996348, 72.4996966),
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			});
		
			var infowindow = new google.maps.InfoWindow();
		
			var marker, i;
		
			for (i = 0; i < locations.length; i++) {  
		  
				marker = new google.maps.Marker({ 
				position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
				map: map ,
				icon: '/browseinfo_theme/static/src/images/marker.png'
				});
		
		
			  google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
				  infowindow.setContent(locations[i][0]);
				  infowindow.open(map, marker);
				}
			  })(marker, i));
			}
		})(jQuery);
