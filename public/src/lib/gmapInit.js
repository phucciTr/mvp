var startEndIds = [];
var waypts = [];
var map, marker, infowindow, infowindowContent;


function initMap() {
  map = new google.maps.Map($('#map')[0], {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
  });

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  $('#submit').click(() => calculateAndDisplayRoute(directionsService, directionsRenderer));

  const startPoint = $('#start-point')[0];
  const autocomplete = new google.maps.places.Autocomplete(startPoint);
  autocomplete.bindTo('bounds', map);

  const endPoint = $('#end-point')[0];
  const ep_autocomplete = new google.maps.places.Autocomplete(endPoint);
  ep_autocomplete.bindTo('bounds', map);

  const destinations = $('#waypoints')[0];
  const wp_autocomplete = new google.maps.places.Autocomplete(destinations);
  wp_autocomplete.bindTo('bounds', map);

  // Specify just the place data fields that you need.
  autocomplete.setFields(['place_id', 'geometry', 'name']);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(startPoint);

  ep_autocomplete.setFields(['place_id', 'geometry', 'name']);
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(endPoint);

  wp_autocomplete.setFields(['place_id', 'geometry', 'name']);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinations);

  infowindow = new google.maps.InfoWindow();
  infowindowContent = $('#infowindow-content')[0];
  infowindow.setContent(infowindowContent);

  marker = new google.maps.Marker({ map: map });
  marker.addListener('click', () => {
    infowindow.open(map, marker);
  });

  autocomplete.addListener('place_changed', placeChangeHandler.bind(this, autocomplete, false));
  wp_autocomplete.addListener('place_changed', placeChangeHandler.bind(this, wp_autocomplete, true));
  ep_autocomplete.addListener('place_changed', placeChangeHandler.bind(this, ep_autocomplete, false))
}


var placeChangeHandler = (autocomp, isWaypt) => {

  infowindow.close();
  let place = autocomp.getPlace();

  if (!place.geometry) { return; }

  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
  }

  // Set the position of the marker using the place ID and location.
  marker.setPlace({
    placeId: place.place_id,
    location: place.geometry.location,
  });

  marker.setVisible(true);
  infowindowContent.children.namedItem('place-name').textContent = place.name;
  infowindowContent.children.namedItem('place-id').textContent = place.place_id;
  infowindowContent.children.namedItem('place-address').textContent = place.formatted_address;
  infowindow.open(map, marker);

  if (!isWaypt) { startEndIds.push(place.place_id); }
  if (isWaypt) {
    waypts.push({
        location: { placeId: place.place_id },
        stopover: true
    });
  }
};


var calculateAndDisplayRoute = (directionsService, directionsRenderer) => {

  console.log('calculateAndDisplayRoute startEndIds = ', startEndIds);
  console.log('calculateAndDisplayRoute waypts = ', waypts);

  directionsService.route(
    {
      origin: { placeId: startEndIds[0] },
      destination: { placeId: startEndIds[1] },
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === 'OK') {
        console.log('response = ', response);
        directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );

};



export default initMap;
