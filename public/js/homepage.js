
//Javascript functions for homepage with map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.0522, lng: -118.2437},
    zoom: 13,
    mapTypeId: 'roadmap'
  });
  var infoWindow = new google.maps.InfoWindow;


  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);

  });

  // create current location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);

      infoWindow.setContent('My Location');
      

      map.setCenter(pos);

      var marker = new google.maps.Marker({
          position: pos,
          map: map
      });

      
      // create location based on meeting set
      //$.getJSON("../json/meetings.json", function(meetings) {
        $.getJSON("/meetings.json", function(meetings) {

        var searchString = meetings.meetings[0].meetingLocation;
        var meetTime = meetings.meetings[0].time;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          'address': searchString
        }, function (result, status) {
          if (status == 'OK') {
            var meetinginfoWindow = new google.maps.InfoWindow;
            meetinginfoWindow.setContent("You have a meeting at " + searchString +", at " + meetTime );
            map.setCenter(result[0].geometry.location);
            var marker2 = new google.maps.Marker({
                map: map,
                position: result[0].geometry.location
            });
            marker2.addListener('click', function() {
              meetinginfoWindow.open(map, marker2);
            });

          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
        marker.addListener('click', function() {
          infoWindow.open(map, marker);
        });

      });
      

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
  }
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                 'Error: The Geolocation service failed.' :
                 'Error: Your app doesn\'t support geolocation.');
  infoWindow.open(map);
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
document.getElementById("addMeetingButton").addEventListener("click",function(){
  console.log("addMeeting");
  window.location.href = "addMeeting.html";
});