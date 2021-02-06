var startEndIds = [];
var waypts = [];
var map, marker, infowindow, infowindowContent;

var insertWp = [];


function initMap() {
  map = new google.maps.Map($('#map')[0], {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
  });

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
  directionsRenderer.setPanel($('#right-panel')[0]);

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
  let address = place.name;
  let id = place.place_id;
  let placeLoc = place.geometry.location;

  if (!place.geometry) { return; }

  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(placeLoc);
    map.setZoom(17);
  }

  // Set the position of the marker using the place ID and location.
  marker.setPlace({
    placeId: id,
    location: placeLoc,
  });

  marker.setVisible(true);
  infowindowContent.children.namedItem('place-name').textContent = address;
  infowindow.open(map, marker);

  if (!isWaypt) { startEndIds.push(id); }
  if (isWaypt) {
    let point = {};
    point[id] = address;
    insertWp.push(point);

    waypts.push({
        location: { placeId: id },
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

        let re_ordered_waypoints = response.routes[0].waypoint_order;
        let optimizedWaypoints = getOptWaypoints(re_ordered_waypoints);
        let dirUrl = generateURL(optimizedWaypoints);
        $('#url').attr('href', dirUrl).text('Link To Nav');

        directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );

};

var generateURL = (optimizedWaypoints) => {
  let startId = startEndIds[0];
  let endId = startEndIds[1];
  let dirUrl = `https://www.google.com/maps/dir/?api=1&origin=start&origin_place_id=${startId}&destination=end&destination_place_id=${endId}&travelmode=driving`;
  dirUrl = attachWaypoints(dirUrl, optimizedWaypoints);
  dirUrl = attachWaypointsIds(dirUrl, optimizedWaypoints);
  return dirUrl;
};


var attachWaypointsIds = (dirUrl, optimizedWaypoints) => {
  let last = optimizedWaypoints.length - 1;
  dirUrl += 'waypoint_place_ids=';

  optimizedWaypoints.forEach((point, index) => {
    let id = Object.keys(point)[0];
    dirUrl += (index === last) ? id : (id + '%7C');
  });

  return dirUrl;
}

var attachWaypoints = (dirUrl, optimizedWaypoints) => {
  let last = optimizedWaypoints.length - 1;
  dirUrl += `&waypoints=`;

  optimizedWaypoints.forEach((point, index) => {
    dirUrl += (index === last) ? 'id&' : 'id%7C';
  });

  return dirUrl;
};


var getOptWaypoints = (orderedWpIndexes) => {
  let optimizedWaypoints = [];

  orderedWpIndexes.forEach((wpIndex) => {
    optimizedWaypoints.push(insertWp[wpIndex])
  });

  return optimizedWaypoints
};

export default initMap;
