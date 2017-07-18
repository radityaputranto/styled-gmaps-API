	var map;
	var markersArray= [];
	var markersArrayLoad = [];
	var temp = 1;
	var dataLoad =1;
	var directionsDisplay;
	var directionsService;
	



	var infoWindow = new google.maps.InfoWindow;
		//clearDirections();
		
		google.maps.event.addListener(map, 'click', function(event){
			var reg = document.getElementById("max123").value;
			var imp = document.getElementById("max").value;
			
			if(imp < reg){
				if (imp>= dataLoad){
					addMarkerLoad(event.latLng);
					dataLoad++;
				}else if (reg>= temp){
					addMarker(event.latLng);
					temp++;
				}else{
					alert("error");
				}
			}else{
				alert("error");
			}
		});
	}
	google.maps.event.addDomListener(window,'load',myMap);

	//nambah marker regular
	function addMarker(location){
		var marker = new google.maps.Marker({
			position: location,
			map: map
		});
		markersArray.push(marker);
	}
	
	//nambah marker important
	function addMarkerLoad(loc){
		var marker = new google.maps.Marker({
			position: loc,
			map: map,
			icon: 'mapmarker.png'
		});
		markersArrayLoad.push(marker);
	}
	
	// Removes map directions
	function clearDirections() {
		// If there are directions being shown, clear them
		if (directionsDisplay != null) {
			directionsDisplay.setMap(null);
			directionsDisplay = null;
		}
	}
	
	// Completely clears map
	function clearMap() {
		clearMapMarkers();
		clearDirections();
	}
	
	// Removes markers and temporary paths
	function clearMapMarkers() {
		for (index in markers) {
			markers[index].setMap(null);
		}
		prevNodes = nodes;
		nodes = [];
		if (polylinePath != undefined) {
			polylinePath.setMap(null);
		}
		
		markers = [];
		
		//$('#ga-buttons').show();
	}