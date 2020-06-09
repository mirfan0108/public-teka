function initialize() {
    var locations = [
      ['<h5>Head Office</h5>', -6.204068, 106.913842],
      ['<h5>Factory</h5>', -7.3195408, 110.3270023]
    ];
    var infowindow = new google.maps.InfoWindow();
    var options = {
      zoom: 8, 
      center: new google.maps.LatLng(-7.011897, 106.985295),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), options);
      var marker, i;
      for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    };