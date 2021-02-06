var startEndIds = [];
var waypts = [];
var map, marker, infowindow, infowindowContent;

function initMap() {
  map = new google.maps.Map($('#map')[0], {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13
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
  ep_autocomplete.addListener('place_changed', placeChangeHandler.bind(this, ep_autocomplete, false));
}

var placeChangeHandler = (autocomp, isWaypt) => {

  infowindow.close();
  let place = autocomp.getPlace();

  if (!place.geometry) {
    return;
  }

  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
  }

  // Set the position of the marker using the place ID and location.
  marker.setPlace({
    placeId: place.place_id,
    location: place.geometry.location
  });

  marker.setVisible(true);
  infowindowContent.children.namedItem('place-name').textContent = place.name;
  infowindowContent.children.namedItem('place-id').textContent = place.place_id;
  infowindowContent.children.namedItem('place-address').textContent = place.formatted_address;
  infowindow.open(map, marker);

  if (!isWaypt) {
    startEndIds.push(place.place_id);
  }
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

  directionsService.route({
    origin: { placeId: startEndIds[0] },
    destination: { placeId: startEndIds[1] },
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: google.maps.TravelMode.DRIVING
  }, (response, status) => {
    if (status === 'OK') {
      console.log('response = ', response);
      directionsRenderer.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
};

export default initMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZ21hcEluaXQuanMiXSwibmFtZXMiOlsic3RhcnRFbmRJZHMiLCJ3YXlwdHMiLCJtYXAiLCJtYXJrZXIiLCJpbmZvd2luZG93IiwiaW5mb3dpbmRvd0NvbnRlbnQiLCJpbml0TWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsIiQiLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJ6b29tIiwiZGlyZWN0aW9uc1NlcnZpY2UiLCJEaXJlY3Rpb25zU2VydmljZSIsImRpcmVjdGlvbnNSZW5kZXJlciIsIkRpcmVjdGlvbnNSZW5kZXJlciIsInNldE1hcCIsInNldFBhbmVsIiwiY2xpY2siLCJjYWxjdWxhdGVBbmREaXNwbGF5Um91dGUiLCJzdGFydFBvaW50IiwiYXV0b2NvbXBsZXRlIiwicGxhY2VzIiwiQXV0b2NvbXBsZXRlIiwiYmluZFRvIiwiZW5kUG9pbnQiLCJlcF9hdXRvY29tcGxldGUiLCJkZXN0aW5hdGlvbnMiLCJ3cF9hdXRvY29tcGxldGUiLCJzZXRGaWVsZHMiLCJjb250cm9scyIsIkNvbnRyb2xQb3NpdGlvbiIsIlRPUF9MRUZUIiwicHVzaCIsIkxFRlRfVE9QIiwiSW5mb1dpbmRvdyIsInNldENvbnRlbnQiLCJNYXJrZXIiLCJhZGRMaXN0ZW5lciIsIm9wZW4iLCJwbGFjZUNoYW5nZUhhbmRsZXIiLCJiaW5kIiwiYXV0b2NvbXAiLCJpc1dheXB0IiwiY2xvc2UiLCJwbGFjZSIsImdldFBsYWNlIiwiZ2VvbWV0cnkiLCJ2aWV3cG9ydCIsImZpdEJvdW5kcyIsInNldENlbnRlciIsImxvY2F0aW9uIiwic2V0Wm9vbSIsInNldFBsYWNlIiwicGxhY2VJZCIsInBsYWNlX2lkIiwic2V0VmlzaWJsZSIsImNoaWxkcmVuIiwibmFtZWRJdGVtIiwidGV4dENvbnRlbnQiLCJuYW1lIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJzdG9wb3ZlciIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZSIsIm9yaWdpbiIsImRlc3RpbmF0aW9uIiwid2F5cG9pbnRzIiwib3B0aW1pemVXYXlwb2ludHMiLCJ0cmF2ZWxNb2RlIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJyZXNwb25zZSIsInN0YXR1cyIsInNldERpcmVjdGlvbnMiLCJ3aW5kb3ciLCJhbGVydCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsY0FBYyxFQUFsQjtBQUNBLElBQUlDLFNBQVMsRUFBYjtBQUNBLElBQUlDLEdBQUosRUFBU0MsTUFBVCxFQUFpQkMsVUFBakIsRUFBNkJDLGlCQUE3Qjs7QUFHQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2pCSixRQUFNLElBQUlLLE9BQU9DLElBQVAsQ0FBWUMsR0FBaEIsQ0FBb0JDLEVBQUUsTUFBRixFQUFVLENBQVYsQ0FBcEIsRUFBa0M7QUFDdENDLFlBQVEsRUFBRUMsS0FBSyxDQUFDLE9BQVIsRUFBaUJDLEtBQUssUUFBdEIsRUFEOEI7QUFFdENDLFVBQU07QUFGZ0MsR0FBbEMsQ0FBTjs7QUFLQSxRQUFNQyxvQkFBb0IsSUFBSVIsT0FBT0MsSUFBUCxDQUFZUSxpQkFBaEIsRUFBMUI7QUFDQSxRQUFNQyxxQkFBcUIsSUFBSVYsT0FBT0MsSUFBUCxDQUFZVSxrQkFBaEIsRUFBM0I7QUFDQUQscUJBQW1CRSxNQUFuQixDQUEwQmpCLEdBQTFCOztBQUVBZSxxQkFBbUJHLFFBQW5CLENBQTRCVixFQUFFLGNBQUYsRUFBa0IsQ0FBbEIsQ0FBNUI7O0FBRUFBLElBQUUsU0FBRixFQUFhVyxLQUFiLENBQW1CLE1BQU1DLHlCQUF5QlAsaUJBQXpCLEVBQTRDRSxrQkFBNUMsQ0FBekI7O0FBRUEsUUFBTU0sYUFBYWIsRUFBRSxjQUFGLEVBQWtCLENBQWxCLENBQW5CO0FBQ0EsUUFBTWMsZUFBZSxJQUFJakIsT0FBT0MsSUFBUCxDQUFZaUIsTUFBWixDQUFtQkMsWUFBdkIsQ0FBb0NILFVBQXBDLENBQXJCO0FBQ0FDLGVBQWFHLE1BQWIsQ0FBb0IsUUFBcEIsRUFBOEJ6QixHQUE5Qjs7QUFFQSxRQUFNMEIsV0FBV2xCLEVBQUUsWUFBRixFQUFnQixDQUFoQixD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SUEsV0FBVyxJQUFmLEVBQXFCO0FBQ25CWCxjQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQlMsUUFBM0I7QUFDQTNELHlCQUFtQjZELGFBQW5CLENBQWlDRixRQUFqQztBQUNELEtBSEQsTUFHTztBQUNMRyxhQUFPQyxLQUFQLENBQWEsc0NBQXNDSCxNQUFuRDtBQUNEO0FBQ0YsR0FmSDtBQWtCRCxDQXZCRDs7QUEyQkEsZUFBZXZFLE9BQWYiLCJmaWxlIjoiZ21hcEluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3RhcnRFbmRJZHMgPSBbXTtcbnZhciB3YXlwdHMgPSBbXTtcbnZhciBtYXAsIG1hcmtlciwgaW5mb3dpbmRvdywgaW5mb3dpbmRvd0NvbnRlbnQ7XG5cblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCgkKCcjbWFwJylbMF0sIHtcbiAgICBjZW50ZXI6IHsgbGF0OiAtMzMuODY4OCwgbG5nOiAxNTEuMjE5NSB9LFxuICAgIHpvb206IDEzLFxuICB9KTtcblxuICBjb25zdCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xuICBjb25zdCBkaXJlY3Rpb25zUmVuZGVyZXIgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKCk7XG4gIGRpcmVjdGlvbnNSZW5kZXJlci5zZXRNYXAobWFwKTtcblxuICBkaXJlY3Rpb25zUmVuZGVyZXIuc2V0UGFuZWwoJCgnI3JpZ2h0LXBhbmVsJylbMF0pO1xuXG4gICQoJyNzdWJtaXQnKS5jbGljaygoKSA9PiBjYWxjdWxhdGVBbmREaXNwbGF5Um91dGUoZGlyZWN0aW9uc1NlcnZpY2UsIGRpcmVjdGlvbnNSZW5kZXJlcikpO1xuXG4gIGNvbnN0IHN0YXJ0UG9pbnQgPSAkKCcjc3RhcnQtcG9pbnQnKVswXTtcbiAgY29uc3QgYXV0b2NvbXBsZXRlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoc3RhcnRQb2ludCk7XG4gIGF1dG9jb21wbGV0ZS5iaW5kVG8oJ2JvdW5kcycsIG1hcCk7XG5cbiAgY29uc3QgZW5kUG9pbnQgPSAkKCcjZW5kLXBvaW50JylbMF07XG4gIGNvbnN0IGVwX2F1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGVuZFBvaW50KTtcbiAgZXBfYXV0b2NvbXBsZXRlLmJpbmRUbygnYm91bmRzJywgbWFwKTtcblxuICBjb25zdCBkZXN0aW5hdGlvbnMgPSAkKCcjd2F5cG9pbnRzJylbMF07XG4gIGNvbnN0IHdwX2F1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGRlc3RpbmF0aW9ucyk7XG4gIHdwX2F1dG9jb21wbGV0ZS5iaW5kVG8oJ2JvdW5kcycsIG1hcCk7XG5cbiAgLy8gU3BlY2lmeSBqdXN0IHRoZSBwbGFjZSBkYXRhIGZpZWxkcyB0aGF0IHlvdSBuZWVkLlxuICBhdXRvY29tcGxldGUuc2V0RmllbGRzKFsncGxhY2VfaWQnLCAnZ2VvbWV0cnknLCAnbmFtZSddKTtcbiAgbWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5UT1BfTEVGVF0ucHVzaChzdGFydFBvaW50KTtcblxuICBlcF9hdXRvY29tcGxldGUuc2V0RmllbGRzKFsncGxhY2VfaWQnLCAnZ2VvbWV0cnknLCAnbmFtZSddKTtcbiAgbWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5MRUZUX1RPUF0ucHVzaChlbmRQb2ludCk7XG5cbiAgd3BfYXV0b2NvbXBsZXRlLnNldEZpZWxkcyhbJ3BsYWNlX2lkJywgJ2dlb21ldHJ5JywgJ25hbWUnXSk7XG4gIG1hcC5jb250cm9sc1tnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uVE9QX0xFRlRdLnB1c2goZGVzdGluYXRpb25zKTtcblxuICBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coKTtcbiAgaW5mb3dpbmRvd0NvbnRlbnQgPSAkKCcjaW5mb3dpbmRvdy1jb250ZW50JylbMF07XG4gIGluZm93aW5kb3cuc2V0Q29udGVudChpbmZvd2luZG93Q29udGVudCk7XG5cbiAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7IG1hcDogbWFwIH0pO1xuICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcik7XG4gIH0pO1xuXG4gIGF1dG9jb21wbGV0ZS5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsIHBsYWNlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMsIGF1dG9jb21wbGV0ZSwgZmFsc2UpKTtcbiAgd3BfYXV0b2NvbXBsZXRlLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgcGxhY2VDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcywgd3BfYXV0b2NvbXBsZXRlLCB0cnVlKSk7XG4gIGVwX2F1dG9jb21wbGV0ZS5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsIHBsYWNlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMsIGVwX2F1dG9jb21wbGV0ZSwgZmFsc2UpKVxufVxuXG5cbnZhciBwbGFjZUNoYW5nZUhhbmRsZXIgPSAoYXV0b2NvbXAsIGlzV2F5cHQpID0+IHtcblxuICBpbmZvd2luZG93LmNsb3NlKCk7XG4gIGxldCBwbGFjZSA9IGF1dG9jb21wLmdldFBsYWNlKCk7XG5cbiAgaWYgKCFwbGFjZS5nZW9tZXRyeSkgeyByZXR1cm47IH1cblxuICBpZiAocGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpIHtcbiAgICBtYXAuZml0Qm91bmRzKHBsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KTtcbiAgfSBlbHNlIHtcbiAgICBtYXAuc2V0Q2VudGVyKHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uKTtcbiAgICBtYXAuc2V0Wm9vbSgxNyk7XG4gIH1cblxuICAvLyBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBtYXJrZXIgdXNpbmcgdGhlIHBsYWNlIElEIGFuZCBsb2NhdGlvbi5cbiAgbWFya2VyLnNldFBsYWNlKHtcbiAgICBwbGFjZUlkOiBwbGFjZS5wbGFjZV9pZCxcbiAgICBsb2NhdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24sXG4gIH0pO1xuXG4gIG1hcmtlci5zZXRWaXNpYmxlKHRydWUpO1xuICBpbmZvd2luZG93Q29udGVudC5jaGlsZHJlbi5uYW1lZEl0ZW0oJ3BsYWNlLW5hbWUnKS50ZXh0Q29udGVudCA9IHBsYWNlLm5hbWU7XG4gIGluZm93aW5kb3dDb250ZW50LmNoaWxkcmVuLm5hbWVkSXRlbSgncGxhY2UtaWQnKS50ZXh0Q29udGVudCA9IHBsYWNlLnBsYWNlX2lkO1xuICBpbmZvd2luZG93Q29udGVudC5jaGlsZHJlbi5uYW1lZEl0ZW0oJ3BsYWNlLWFkZHJlc3MnKS50ZXh0Q29udGVudCA9IHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzO1xuICBpbmZvd2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xuXG4gIGlmICghaXNXYXlwdCkgeyBzdGFydEVuZElkcy5wdXNoKHBsYWNlLnBsYWNlX2lkKTsgfVxuICBpZiAoaXNXYXlwdCkge1xuICAgIHdheXB0cy5wdXNoKHtcbiAgICAgICAgbG9jYXRpb246IHsgcGxhY2VJZDogcGxhY2UucGxhY2VfaWQgfSxcbiAgICAgICAgc3RvcG92ZXI6IHRydWVcbiAgICB9KTtcbiAgfVxufTtcblxuXG52YXIgY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlID0gKGRpcmVjdGlvbnNTZXJ2aWNlLCBkaXJlY3Rpb25zUmVuZGVyZXIpID0+IHtcblxuICBjb25zb2xlLmxvZygnY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlIHN0YXJ0RW5kSWRzID0gJywgc3RhcnRFbmRJZHMpO1xuICBjb25zb2xlLmxvZygnY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlIHdheXB0cyA9ICcsIHdheXB0cyk7XG5cbiAgZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUoXG4gICAge1xuICAgICAgb3JpZ2luOiB7IHBsYWNlSWQ6IHN0YXJ0RW5kSWRzWzBdIH0sXG4gICAgICBkZXN0aW5hdGlvbjogeyBwbGFjZUlkOiBzdGFydEVuZElkc1sxXSB9LFxuICAgICAgd2F5cG9pbnRzOiB3YXlwdHMsXG4gICAgICBvcHRpbWl6ZVdheXBvaW50czogdHJ1ZSxcbiAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklORyxcbiAgICB9LFxuICAgIChyZXNwb25zZSwgc3RhdHVzKSA9PiB7XG4gICAgICBpZiAoc3RhdHVzID09PSAnT0snKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZSA9ICcsIHJlc3BvbnNlKTtcbiAgICAgICAgZGlyZWN0aW9uc1JlbmRlcmVyLnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmFsZXJ0KCdEaXJlY3Rpb25zIHJlcXVlc3QgZmFpbGVkIGR1ZSB0byAnICsgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG5cbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBpbml0TWFwO1xuIl19