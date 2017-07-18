

    var startPos = [-7.245411, 112.768930];
    var speed = 50; // km/h
    var delay = 100;
    // If you set the delay below 1000ms and you go to another tab,
    // the setTimeout function will wait to be the active tab again
    // before running the code.
    // See documentation :
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout#Inactive_tabs
    var locations = [
      ['UIN Sunan Ampel', -7.322376, 112.734212, 4],
      ['Universitas 17 Agustus', -7.298581, 112.766785, 5],
      ['Kantor Bersama Samsat', -7.222890, 112.776140, 3],
      ['Universitas Airlangga', -7.273040, 112.758674, 2],
      ['PENS', -7.276829, 112.794937, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(-7.2759773, 112.7829208),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var markerplace, marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'motorcycle.png'
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

  //   marker = new google.maps.Marker({
  //       position: new google.maps.LatLng(startPos[0], startPos[1]),
  //       map: map
  //   });
    
  //   google.maps.event.addListenerOnce(map, 'click', function()
  //   {
  //       animateMarker(marker, [
  //           // The coordinates of each point you want the marker to go to.
  //           // You don't need to specify the starting position again.
  //           [-7.247753, 112.777299],
  //           [-7.250520, 112.786654]
  //       ], speed);
  //   });

  //   function animateMarker(marker, coords, km_h) {
  //   var target = 0;
  //   var km_h = km_h || 50;
  //   coords.push([startPos[0], startPos[1]]);
    
  //   function goToPoint()
  //   {
  //       var lat = marker.position.lat();
  //       var lng = marker.position.lng();
  //       var step = (km_h * 1000 * delay) / 3600000; // in meters
        
  //       var dest = new google.maps.LatLng(
  //       coords[target][0], coords[target][1]);
        
  //       var distance =
  //       google.maps.geometry.spherical.computeDistanceBetween(
  //       dest, marker.position); // in meters
        
  //       var numStep = distance / step;
  //       var i = 0;
  //       var deltaLat = (coords[target][0] - lat) / numStep;
  //       var deltaLng = (coords[target][1] - lng) / numStep;
        
  //       function moveMarker()
  //       {
  //           lat += deltaLat;
  //           lng += deltaLng;
  //           i += step;
            
  //           if (i < distance)
  //           {
  //               marker.setPosition(new google.maps.LatLng(lat, lng));
  //               setTimeout(moveMarker, delay);
  //           }
  //           else
  //           {   marker.setPosition(dest);
  //               target++;
  //               if (target == coords.length){ target = 0; }
                
  //               setTimeout(goToPoint, delay);
  //           }
  //       }
  //       moveMarker();
  //   }
  //   goToPoint();
  // }
  