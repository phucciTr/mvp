var startEndIds = [];
var waypts = [];
var map, marker, infowindow, infowindowContent;

var insertWp = [];

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
  let address = place.name;
  let id = place.place_id;
  let placeLoc = place.geometry.location;

  if (!place.geometry) {
    return;
  }

  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(placeLoc);
    map.setZoom(17);
  }

  // Set the position of the marker using the place ID and location.
  marker.setPlace({
    placeId: id,
    location: placeLoc
  });

  marker.setVisible(true);
  infowindowContent.children.namedItem('place-name').textContent = address;
  infowindow.open(map, marker);

  if (!isWaypt) {
    startEndIds.push(id);
  }
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

  directionsService.route({
    origin: { placeId: startEndIds[0] },
    destination: { placeId: startEndIds[1] },
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: google.maps.TravelMode.DRIVING
  }, (response, status) => {
    if (status === 'OK') {

      let re_ordered_waypoints = response.routes[0].waypoint_order;
      let optimizedWaypoints = getOptWaypoints(re_ordered_waypoints);
      let dirUrl = generateURL(optimizedWaypoints);
      $('#url').attr('href', dirUrl).text('Link To Nav');

      directionsRenderer.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
};

var generateURL = optimizedWaypoints => {
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
    dirUrl += index === last ? id : id + '%7C';
  });

  return dirUrl;
};

var attachWaypoints = (dirUrl, optimizedWaypoints) => {
  let last = optimizedWaypoints.length - 1;
  dirUrl += `&waypoints=`;

  optimizedWaypoints.forEach((point, index) => {
    dirUrl += index === last ? 'id&' : 'id%7C';
  });

  return dirUrl;
};

var getOptWaypoints = orderedWpIndexes => {
  let optimizedWaypoints = [];

  orderedWpIndexes.forEach(wpIndex => {
    optimizedWaypoints.push(insertWp[wpIndex]);
  });

  return optimizedWaypoints;
};

export default initMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ21hcEluaXQuanMiXSwibmFtZXMiOlsic3RhcnRFbmRJZHMiLCJ3YXlwdHMiLCJtYXAiLCJtYXJrZXIiLCJpbmZvd2luZG93IiwiaW5mb3dpbmRvd0NvbnRlbnQiLCJpbnNlcnRXcCIsImluaXRNYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiJCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJkaXJlY3Rpb25zU2VydmljZSIsIkRpcmVjdGlvbnNTZXJ2aWNlIiwiZGlyZWN0aW9uc1JlbmRlcmVyIiwiRGlyZWN0aW9uc1JlbmRlcmVyIiwic2V0TWFwIiwic2V0UGFuZWwiLCJjbGljayIsImNhbGN1bGF0ZUFuZERpc3BsYXlSb3V0ZSIsInN0YXJ0UG9pbnQiLCJhdXRvY29tcGxldGUiLCJwbGFjZXMiLCJBdXRvY29tcGxldGUiLCJiaW5kVG8iLCJlbmRQb2ludCIsImVwX2F1dG9jb21wbGV0ZSIsImRlc3RpbmF0aW9ucyIsIndwX2F1dG9jb21wbGV0ZSIsInNldEZpZWxkcyIsImNvbnRyb2xzIiwiQ29udHJvbFBvc2l0aW9uIiwiVE9QX0xFRlQiLCJwdXNoIiwiTEVGVF9UT1AiLCJJbmZvV2luZG93Iiwic2V0Q29udGVudCIsIk1hcmtlciIsImFkZExpc3RlbmVyIiwib3BlbiIsInBsYWNlQ2hhbmdlSGFuZGxlciIsImJpbmQiLCJhdXRvY29tcCIsImlzV2F5cHQiLCJjbG9zZSIsInBsYWNlIiwiZ2V0UGxhY2UiLCJhZGRyZXNzIiwibmFtZSIsImlkIiwicGxhY2VfaWQiLCJwbGFjZUxvYyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJ2aWV3cG9ydCIsImZpdEJvdW5kcyIsInNldENlbnRlciIsInNldFpvb20iLCJzZXRQbGFjZSIsInBsYWNlSWQiLCJzZXRWaXNpYmxlIiwiY2hpbGRyZW4iLCJuYW1lZEl0ZW0iLCJ0ZXh0Q29udGVudCIsInBvaW50Iiwic3RvcG92ZXIiLCJyb3V0ZSIsIm9yaWdpbiIsImRlc3RpbmF0aW9uIiwid2F5cG9pbnRzIiwib3B0aW1pemVXYXlwb2ludHMiLCJ0cmF2ZWxNb2RlIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJyZXNwb25zZSIsInN0YXR1cyIsInJlX29yZGVyZWRfd2F5cG9pbnRzIiwicm91dGVzIiwid2F5cG9pbnRfb3JkZXIiLCJvcHRpbWl6ZWRXYXlwb2ludHMiLCJnZXRPcHRXYXlwb2ludHMiLCJkaXJVcmwiLCJnZW5lcmF0ZVVSTCIsImF0dHIiLCJ0ZXh0Iiwic2V0RGlyZWN0aW9ucyIsIndpbmRvdyIsImFsZXJ0Iiwic3RhcnRJZCIsImVuZElkIiwiYXR0YWNoV2F5cG9pbnRzIiwiYXR0YWNoV2F5cG9pbnRzSWRzIiwibGFzdCIsImxlbmd0aCIsImZvckVhY2giLCJpbmRleCIsIk9iamVjdCIsImtleXMiLCJvcmRlcmVkV3BJbmRleGVzIiwid3BJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsY0FBYyxFQUFsQjtBQUNBLElBQUlDLFNBQVMsRUFBYjtBQUNBLElBQUlDLEdBQUosRUFBU0MsTUFBVCxFQUFpQkMsVUFBakIsRUFBNkJDLGlCQUE3Qjs7QUFFQSxJQUFJQyxXQUFXLEVBQWY7O0FBR0EsU0FBU0MsT0FBVCxHQUFtQjtBQUNqQkwsUUFBTSxJQUFJTSxPQUFPQyxJQUFQLENBQVlDLEdBQWhCLENBQW9CQyxFQUFFLE1BQUYsRUFBVSxDQUFWLENBQXBCLEVBQWtDO0FBQ3RDQyxZQUFRLEVBQUVDLEtBQUssQ0FBQyxPQUFSLEVBQWlCQyxLQUFLLFFBQXRCLEVBRDhCO0FBRXRDQyxVQUFNO0FBRmdDLEdBQWxDLENBQU47O0FBS0EsUUFBTUMsb0JBQW9CLElBQUlSLE9BQU9DLElBQVAsQ0FBWVEsaUJBQWhCLEVBQTFCO0FBQ0EsUUFBTUMscUJBQXFCLElBQUlWLE9BQU9DLElBQVAsQ0FBWVUsa0JBQWhCLEVBQTNCO0FBQ0FELHFCQUFtQkUsTUFBbkIsQ0FBMEJsQixHQUExQjtBQUNBZ0IscUJBQW1CRyxRQUFuQixDQUE0QlYsRUFBRSxjQUFGLEVBQWtCLENB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ZSxPQUFuQixDQUEyQixDQUFDOUIsS0FBRCxFQUFRK0IsS0FBUixLQUFrQjtBQUMzQyxRQUFJOUMsS0FBSytDLE9BQU9DLElBQVAsQ0FBWWpDLEtBQVosRUFBbUIsQ0FBbkIsQ0FBVDtBQUNBaUIsY0FBV2MsVUFBVUgsSUFBWCxHQUFtQjNDLEVBQW5CLEdBQXlCQSxLQUFLLEtBQXhDO0FBQ0QsR0FIRDs7QUFLQSxTQUFPZ0MsTUFBUDtBQUNELENBVkQ7O0FBWUEsSUFBSVMsa0JBQWtCLENBQUNULE1BQUQsRUFBU0Ysa0JBQVQsS0FBZ0M7QUFDcEQsTUFBSWEsT0FBT2IsbUJBQW1CYyxNQUFuQixHQUE0QixDQUF2QztBQUNBWixZQUFXLGFBQVg7O0FBRUFGLHFCQUFtQmUsT0FBbkIsQ0FBMkIsQ0FBQzlCLEtBQUQsRUFBUStCLEtBQVIsS0FBa0I7QUFDM0NkLGNBQVdjLFVBQVVILElBQVgsR0FBbUIsS0FBbkIsR0FBMkIsT0FBckM7QUFDRCxHQUZEOztBQUlBLFNBQU9YLE1BQVA7QUFDRCxDQVREOztBQVlBLElBQUlELGtCQUFtQmtCLGdCQUFELElBQXNCO0FBQzFDLE1BQUluQixxQkFBcUIsRUFBekI7O0FBRUFtQixtQkFBaUJKLE9BQWpCLENBQTBCSyxPQUFELElBQWE7QUFDcENwQix1QkFBbUI5QyxJQUFuQixDQUF3Qi9CLFNBQVNpRyxPQUFULENBQXhCO0FBQ0QsR0FGRDs7QUFJQSxTQUFPcEIsa0JBQVA7QUFDRCxDQVJEOztBQVVBLGVBQWU1RSxPQUFmIiwiZmlsZSI6ImdtYXBJbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHN0YXJ0RW5kSWRzID0gW107XG52YXIgd2F5cHRzID0gW107XG52YXIgbWFwLCBtYXJrZXIsIGluZm93aW5kb3csIGluZm93aW5kb3dDb250ZW50O1xuXG52YXIgaW5zZXJ0V3AgPSBbXTtcblxuXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKCQoJyNtYXAnKVswXSwge1xuICAgIGNlbnRlcjogeyBsYXQ6IC0zMy44Njg4LCBsbmc6IDE1MS4yMTk1IH0sXG4gICAgem9vbTogMTMsXG4gIH0pO1xuXG4gIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG4gIGNvbnN0IGRpcmVjdGlvbnNSZW5kZXJlciA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoKTtcbiAgZGlyZWN0aW9uc1JlbmRlcmVyLnNldE1hcChtYXApO1xuICBkaXJlY3Rpb25zUmVuZGVyZXIuc2V0UGFuZWwoJCgnI3JpZ2h0LXBhbmVsJylbMF0pO1xuXG4gICQoJyNzdWJtaXQnKS5jbGljaygoKSA9PiBjYWxjdWxhdGVBbmREaXNwbGF5Um91dGUoZGlyZWN0aW9uc1NlcnZpY2UsIGRpcmVjdGlvbnNSZW5kZXJlcikpO1xuXG4gIGNvbnN0IHN0YXJ0UG9pbnQgPSAkKCcjc3RhcnQtcG9pbnQnKVswXTtcbiAgY29uc3QgYXV0b2NvbXBsZXRlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoc3RhcnRQb2ludCk7XG4gIGF1dG9jb21wbGV0ZS5iaW5kVG8oJ2JvdW5kcycsIG1hcCk7XG5cbiAgY29uc3QgZW5kUG9pbnQgPSAkKCcjZW5kLXBvaW50JylbMF07XG4gIGNvbnN0IGVwX2F1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGVuZFBvaW50KTtcbiAgZXBfYXV0b2NvbXBsZXRlLmJpbmRUbygnYm91bmRzJywgbWFwKTtcblxuICBjb25zdCBkZXN0aW5hdGlvbnMgPSAkKCcjd2F5cG9pbnRzJylbMF07XG4gIGNvbnN0IHdwX2F1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGRlc3RpbmF0aW9ucyk7XG4gIHdwX2F1dG9jb21wbGV0ZS5iaW5kVG8oJ2JvdW5kcycsIG1hcCk7XG5cbiAgLy8gU3BlY2lmeSBqdXN0IHRoZSBwbGFjZSBkYXRhIGZpZWxkcyB0aGF0IHlvdSBuZWVkLlxuICBhdXRvY29tcGxldGUuc2V0RmllbGRzKFsncGxhY2VfaWQnLCAnZ2VvbWV0cnknLCAnbmFtZSddKTtcbiAgbWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5UT1BfTEVGVF0ucHVzaChzdGFydFBvaW50KTtcblxuICBlcF9hdXRvY29tcGxldGUuc2V0RmllbGRzKFsncGxhY2VfaWQnLCAnZ2VvbWV0cnknLCAnbmFtZSddKTtcbiAgbWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5MRUZUX1RPUF0ucHVzaChlbmRQb2ludCk7XG5cbiAgd3BfYXV0b2NvbXBsZXRlLnNldEZpZWxkcyhbJ3BsYWNlX2lkJywgJ2dlb21ldHJ5JywgJ25hbWUnXSk7XG4gIG1hcC5jb250cm9sc1tnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uVE9QX0xFRlRdLnB1c2goZGVzdGluYXRpb25zKTtcblxuICBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coKTtcbiAgaW5mb3dpbmRvd0NvbnRlbnQgPSAkKCcjaW5mb3dpbmRvdy1jb250ZW50JylbMF07XG4gIGluZm93aW5kb3cuc2V0Q29udGVudChpbmZvd2luZG93Q29udGVudCk7XG5cbiAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7IG1hcDogbWFwIH0pO1xuICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcik7XG4gIH0pO1xuXG4gIGF1dG9jb21wbGV0ZS5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsIHBsYWNlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMsIGF1dG9jb21wbGV0ZSwgZmFsc2UpKTtcbiAgd3BfYXV0b2NvbXBsZXRlLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgcGxhY2VDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcywgd3BfYXV0b2NvbXBsZXRlLCB0cnVlKSk7XG4gIGVwX2F1dG9jb21wbGV0ZS5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsIHBsYWNlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMsIGVwX2F1dG9jb21wbGV0ZSwgZmFsc2UpKVxufVxuXG5cbnZhciBwbGFjZUNoYW5nZUhhbmRsZXIgPSAoYXV0b2NvbXAsIGlzV2F5cHQpID0+IHtcblxuICBpbmZvd2luZG93LmNsb3NlKCk7XG5cbiAgbGV0IHBsYWNlID0gYXV0b2NvbXAuZ2V0UGxhY2UoKTtcbiAgbGV0IGFkZHJlc3MgPSBwbGFjZS5uYW1lO1xuICBsZXQgaWQgPSBwbGFjZS5wbGFjZV9pZDtcbiAgbGV0IHBsYWNlTG9jID0gcGxhY2UuZ2VvbWV0cnkubG9jYXRpb247XG5cbiAgaWYgKCFwbGFjZS5nZW9tZXRyeSkgeyByZXR1cm47IH1cblxuICBpZiAocGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpIHtcbiAgICBtYXAuZml0Qm91bmRzKHBsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KTtcbiAgfSBlbHNlIHtcbiAgICBtYXAuc2V0Q2VudGVyKHBsYWNlTG9jKTtcbiAgICBtYXAuc2V0Wm9vbSgxNyk7XG4gIH1cblxuICAvLyBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBtYXJrZXIgdXNpbmcgdGhlIHBsYWNlIElEIGFuZCBsb2NhdGlvbi5cbiAgbWFya2VyLnNldFBsYWNlKHtcbiAgICBwbGFjZUlkOiBpZCxcbiAgICBsb2NhdGlvbjogcGxhY2VMb2MsXG4gIH0pO1xuXG4gIG1hcmtlci5zZXRWaXNpYmxlKHRydWUpO1xuICBpbmZvd2luZG93Q29udGVudC5jaGlsZHJlbi5uYW1lZEl0ZW0oJ3BsYWNlLW5hbWUnKS50ZXh0Q29udGVudCA9IGFkZHJlc3M7XG4gIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcik7XG5cbiAgaWYgKCFpc1dheXB0KSB7IHN0YXJ0RW5kSWRzLnB1c2goaWQpOyB9XG4gIGlmIChpc1dheXB0KSB7XG4gICAgbGV0IHBvaW50ID0ge307XG4gICAgcG9pbnRbaWRdID0gYWRkcmVzcztcbiAgICBpbnNlcnRXcC5wdXNoKHBvaW50KTtcblxuICAgIHdheXB0cy5wdXNoKHtcbiAgICAgICAgbG9jYXRpb246IHsgcGxhY2VJZDogaWQgfSxcbiAgICAgICAgc3RvcG92ZXI6IHRydWVcbiAgICB9KTtcbiAgfVxufTtcblxuXG52YXIgY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlID0gKGRpcmVjdGlvbnNTZXJ2aWNlLCBkaXJlY3Rpb25zUmVuZGVyZXIpID0+IHtcblxuICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShcbiAgICB7XG4gICAgICBvcmlnaW46IHsgcGxhY2VJZDogc3RhcnRFbmRJZHNbMF0gfSxcbiAgICAgIGRlc3RpbmF0aW9uOiB7IHBsYWNlSWQ6IHN0YXJ0RW5kSWRzWzFdIH0sXG4gICAgICB3YXlwb2ludHM6IHdheXB0cyxcbiAgICAgIG9wdGltaXplV2F5cG9pbnRzOiB0cnVlLFxuICAgICAgdHJhdmVsTW9kZTogZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HLFxuICAgIH0sXG4gICAgKHJlc3BvbnNlLCBzdGF0dXMpID0+IHtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdPSycpIHtcblxuICAgICAgICBsZXQgcmVfb3JkZXJlZF93YXlwb2ludHMgPSByZXNwb25zZS5yb3V0ZXNbMF0ud2F5cG9pbnRfb3JkZXI7XG4gICAgICAgIGxldCBvcHRpbWl6ZWRXYXlwb2ludHMgPSBnZXRPcHRXYXlwb2ludHMocmVfb3JkZXJlZF93YXlwb2ludHMpO1xuICAgICAgICBsZXQgZGlyVXJsID0gZ2VuZXJhdGVVUkwob3B0aW1pemVkV2F5cG9pbnRzKTtcbiAgICAgICAgJCgnI3VybCcpLmF0dHIoJ2hyZWYnLCBkaXJVcmwpLnRleHQoJ0xpbmsgVG8gTmF2Jyk7XG5cbiAgICAgICAgZGlyZWN0aW9uc1JlbmRlcmVyLnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmFsZXJ0KCdEaXJlY3Rpb25zIHJlcXVlc3QgZmFpbGVkIGR1ZSB0byAnICsgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG5cbn07XG5cbnZhciBnZW5lcmF0ZVVSTCA9IChvcHRpbWl6ZWRXYXlwb2ludHMpID0+IHtcbiAgbGV0IHN0YXJ0SWQgPSBzdGFydEVuZElkc1swXTtcbiAgbGV0IGVuZElkID0gc3RhcnRFbmRJZHNbMV07XG4gIGxldCBkaXJVcmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2Rpci8/YXBpPTEmb3JpZ2luPXN0YXJ0Jm9yaWdpbl9wbGFjZV9pZD0ke3N0YXJ0SWR9JmRlc3RpbmF0aW9uPWVuZCZkZXN0aW5hdGlvbl9wbGFjZV9pZD0ke2VuZElkfSZ0cmF2ZWxtb2RlPWRyaXZpbmdgO1xuICBkaXJVcmwgPSBhdHRhY2hXYXlwb2ludHMoZGlyVXJsLCBvcHRpbWl6ZWRXYXlwb2ludHMpO1xuICBkaXJVcmwgPSBhdHRhY2hXYXlwb2ludHNJZHMoZGlyVXJsLCBvcHRpbWl6ZWRXYXlwb2ludHMpO1xuICByZXR1cm4gZGlyVXJsO1xufTtcblxuXG52YXIgYXR0YWNoV2F5cG9pbnRzSWRzID0gKGRpclVybCwgb3B0aW1pemVkV2F5cG9pbnRzKSA9PiB7XG4gIGxldCBsYXN0ID0gb3B0aW1pemVkV2F5cG9pbnRzLmxlbmd0aCAtIDE7XG4gIGRpclVybCArPSAnd2F5cG9pbnRfcGxhY2VfaWRzPSc7XG5cbiAgb3B0aW1pemVkV2F5cG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4ge1xuICAgIGxldCBpZCA9IE9iamVjdC5rZXlzKHBvaW50KVswXTtcbiAgICBkaXJVcmwgKz0gKGluZGV4ID09PSBsYXN0KSA/IGlkIDogKGlkICsgJyU3QycpO1xuICB9KTtcblxuICByZXR1cm4gZGlyVXJsO1xufVxuXG52YXIgYXR0YWNoV2F5cG9pbnRzID0gKGRpclVybCwgb3B0aW1pemVkV2F5cG9pbnRzKSA9PiB7XG4gIGxldCBsYXN0ID0gb3B0aW1pemVkV2F5cG9pbnRzLmxlbmd0aCAtIDE7XG4gIGRpclVybCArPSBgJndheXBvaW50cz1gO1xuXG4gIG9wdGltaXplZFdheXBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICBkaXJVcmwgKz0gKGluZGV4ID09PSBsYXN0KSA/ICdpZCYnIDogJ2lkJTdDJztcbiAgfSk7XG5cbiAgcmV0dXJuIGRpclVybDtcbn07XG5cblxudmFyIGdldE9wdFdheXBvaW50cyA9IChvcmRlcmVkV3BJbmRleGVzKSA9PiB7XG4gIGxldCBvcHRpbWl6ZWRXYXlwb2ludHMgPSBbXTtcblxuICBvcmRlcmVkV3BJbmRleGVzLmZvckVhY2goKHdwSW5kZXgpID0+IHtcbiAgICBvcHRpbWl6ZWRXYXlwb2ludHMucHVzaChpbnNlcnRXcFt3cEluZGV4XSlcbiAgfSk7XG5cbiAgcmV0dXJuIG9wdGltaXplZFdheXBvaW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdE1hcDtcbiJdfQ==