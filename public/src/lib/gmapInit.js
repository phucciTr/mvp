var placesId = [];
var map, marker, infowindow, infowindowContent;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
  });

  const input = document.getElementById("pac-input");
  const autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo("bounds", map);

  const dest1 = document.getElementById('dest1');
  const autocomplete1 = new google.maps.places.Autocomplete(dest1);
  autocomplete1.bindTo('bounds', map);

  // Specify just the place data fields that you need.
  autocomplete.setFields(["place_id", "geometry", "name"]);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  autocomplete1.setFields(['place_id', 'geometry', 'name']);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(dest1);

  infowindow = new google.maps.InfoWindow();
  infowindowContent = document.getElementById("infowindow-content");
  infowindow.setContent(infowindowContent);

  marker = new google.maps.Marker({ map: map });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  autocomplete1.addListener('place_changed', placeChangeHandler.bind(this, autocomplete1))
  autocomplete.addListener('place_changed', placeChangeHandler.bind(this, autocomplete));
}


var placeChangeHandler = (autocomp) => {

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
  infowindowContent.children.namedItem("place-name").textContent = place.name;
  infowindowContent.children.namedItem("place-id").textContent = place.place_id;
  infowindowContent.children.namedItem("place-address").textContent = place.formatted_address;
  infowindow.open(map, marker);

  placesId.push(place.place_id);

  if (placesId[1]) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsRenderer);
  }
};


var calculateAndDisplayRoute = (directionsService, directionsRenderer) => {

  console.log('placesId = ', placesId);
  directionsService.route(
    {
      origin: { placeId: placesId[0] },
      destination: { placeId: placesId[1] },
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === "OK") {
        console.log('response = ', response);
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );

};



export default initMap;
