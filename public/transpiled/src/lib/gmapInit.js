var placesId = [];
var map, marker, infowindow, infowindowContent;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13
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

  autocomplete1.addListener('place_changed', placeChangeHandler.bind(this, autocomplete1));
  autocomplete.addListener('place_changed', placeChangeHandler.bind(this, autocomplete));
}

var placeChangeHandler = autocomp => {

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
  infowindowContent.children.namedItem("place-name").textContent = place.name;
  infowindowContent.children.namedItem("place-id").textContent = place.place_id;
  infowindowContent.children.namedItem("place-address").textContent = place.formatted_address;
  infowindow.open(map, marker);

  placesId.push(place.place_id);
  console.log('placesId = ', placesId);
};

export default initMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZ21hcEluaXQuanMiXSwibmFtZXMiOlsicGxhY2VzSWQiLCJtYXAiLCJtYXJrZXIiLCJpbmZvd2luZG93IiwiaW5mb3dpbmRvd0NvbnRlbnQiLCJpbml0TWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJ6b29tIiwiaW5wdXQiLCJhdXRvY29tcGxldGUiLCJwbGFjZXMiLCJBdXRvY29tcGxldGUiLCJiaW5kVG8iLCJkZXN0MSIsImF1dG9jb21wbGV0ZTEiLCJzZXRGaWVsZHMiLCJjb250cm9scyIsIkNvbnRyb2xQb3NpdGlvbiIsIlRPUF9MRUZUIiwicHVzaCIsIkluZm9XaW5kb3ciLCJzZXRDb250ZW50IiwiTWFya2VyIiwiYWRkTGlzdGVuZXIiLCJvcGVuIiwicGxhY2VDaGFuZ2VIYW5kbGVyIiwiYmluZCIsImF1dG9jb21wIiwiY2xvc2UiLCJwbGFjZSIsImdldFBsYWNlIiwiZ2VvbWV0cnkiLCJ2aWV3cG9ydCIsImZpdEJvdW5kcyIsInNldENlbnRlciIsImxvY2F0aW9uIiwic2V0Wm9vbSIsInNldFBsYWNlIiwicGxhY2VJZCIsInBsYWNlX2lkIiwic2V0VmlzaWJsZSIsImNoaWxkcmVuIiwibmFtZWRJdGVtIiwidGV4dENvbnRlbnQiLCJuYW1lIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxXQUFXLEVBQWY7QUFDQSxJQUFJQyxHQUFKLEVBQVNDLE1BQVQsRUFBaUJDLFVBQWpCLEVBQTZCQyxpQkFBN0I7O0FBR0EsU0FBU0MsT0FBVCxHQUFtQjtBQUNqQkosUUFBTSxJQUFJSyxPQUFPQyxJQUFQLENBQVlDLEdBQWhCLENBQW9CQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXBCLEVBQW9EO0FBQ3hEQyxZQUFRLEVBQUVDLEtBQUssQ0FBQyxPQUFSLEVBQWlCQyxLQUFLLFFBQXRCLEVBRGdEO0FBRXhEQyxVQUFNO0FBRmtELEdBQXBELENBQU47O0FBS0EsUUFBTUMsUUFBUU4sU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQUFkO0FBQ0EsUUFBTU0sZUFBZSxJQUFJVixPQUFPQyxJQUFQLENBQVlVLE1BQVosQ0FBbUJDLFlBQXZCLENBQW9DSCxLQUFwQyxDQUFyQjtBQUNBQyxlQUFhRyxNQUFiLENBQW9CLFFBQXBCLEVBQThCbEIsR0FBOUI7O0FBRUEsUUFBTW1CLFFBQVFYLFNBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLFFBQU1XLGdCQUFnQixJQUFJZixPQUFPQyxJQUFQLENBQVlVLE1BQVosQ0FBbUJDLFlBQXZCLENBQW9DRSxLQUFwQyxDQUF0QjtBQUNBQyxnQkFBY0YsTUFBZCxDQUFxQixRQUFyQixFQUErQmxCLEdBQS9COztBQUVBO0FBQ0FlLGVBQWFNLFNBQWIsQ0FBdUIsQ0FBQyxVQUFELEVBQWEsVUFBYixFQUF5QixNQUF6QixDQUF2QjtBQUNBckIsTUFBSXNCLFFBQUosQ0FBYWpCLE9BQU9DLElBQVAsQ0FBWWlCLGVBQVosQ0FBNEJDLFFBQXpDLEVBQW1EQyxJQUFuRCxDQUF3RFgsS0FBeEQ7O0FBRUFNLGdCQUFjQyxTQUFkLENBQXdCLENBQUMsVUFBRCxFQUFhLFVBQWIsRUFBeUIsTUFBekIsQ0FBeEI7QUFDQXJCLE1BQUlzQixRQUFKLENBQWFqQixPQUFPQyxJQUFQLENBQVlpQixlQUFaLENBQTRCQyxRQUF6QyxFQUFtREMsSUFBbkQsQ0FBd0ROLEtBQXhEOztBQUVBakIsZUFBYSxJQUFJRyxPQUFPQyxJQUFQLENBQVlvQixVQUFoQixFQUFiO0FBQ0F2QixzQkFBb0JLLFNBQVNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQXBCO0FBQ0FQLGFBQVd5QixVQUFYLENBQXNCeEIsaUJBQXRCOztBQUVBRixXQUFTLElBQUlJLE9BQU9DLElBQVAsQ0FBWXNCLE1BQWhCLENBQXVCLEVBQUU1QixLQUFLQSxHQUFQLEVBQXZCLENBQVQ7QUFDQUMsU0FBTzRCLFdBQVAsQ0FBbUIsT0FBbkIsRUFBNEIsTUFBTTtBQUNoQzNCLGVBQVc0QixJQUFYLENBQWdCOUIsR0FBaEIsRUFBcUJDLE1BQXJCO0FBQ0QsR0FGRDs7QUFJQW1CLGdCQUFjUyxXQUFkLENBQTBCLGVBQTFCLEVBQTJDRSxtQkFBbUJDLElBQW5CLENBQXdCLElBQXhCLEVBQThCWixhQUE5QixDQUEzQztBQUNBTCxlQUFhYyxXQUFiLENBQXlCLGVBQXpCLEVBQTBDRSxtQkFBbUJDLElBQW5CLENBQXdCLElBQXhCLEVBQThCakIsWUFBOUIsQ0FBMUM7QUFDRDs7QUFHRCxJQUFJZ0IscUJBQXNCRSxRQUFELElBQWM7O0FBRXJDL0IsYUFBV2dDLEtBQVg7QUFDQSxNQUFJQyxRQUFRRixTQUFTRyxRQUFULEVBQVo7O0FBRUEsTUFBSSxDQUFDRCxNQUFNRSxRQUFYLEVBQXFCO0FBQ25CO0FBQ0Q7O0FBRUQsTUFBSUYsTUFBTUUsUUFBTixDQUFlQyxRQUFuQixFQUE2QjtBQUMzQnRDLFFBQUl1QyxTQUFKLENBQWNKLE1BQU1FLFFBQU4sQ0FBZUMsUUFBN0I7QUFDRCxHQUZELE1BRU87QUFDTHRDLFFBQUl3QyxTQUFKLENBQWNMLE1BQU1FLFFBQU4sQ0FBZUksUUFBN0I7QUFDQXpDLFFBQUkwQyxPQUFKLENBQVksRUFBWjtBQUNEOztBQUVEO0FBQ0F6QyxTQUFPMEMsUUFBUCxDQUFnQjtBQUNkQyxhQUFTVCxNQUFNVSxRQUREO0FBRWRKLGNBQVVOLE1BQU1FLFFBQU4sQ0FBZUk7QUFGWCxHQUFoQjs7QUFLQXhDLFNBQU82QyxVQUFQLENBQWtCLElBQWxCO0FBQ0EzQyxvQkFBa0I0QyxRQUFsQixDQUEyQkMsU0FBM0IsQ0FBcUMsWUFBckMsRUFBbURDLFdBQW5ELEdBQWlFZCxNQUFNZSxJQUF2RTtBQUNBL0Msb0JBQWtCNEMsUUFBbEIsQ0FBMkJDLFNBQTNCLENBQXFDLFVBQXJDLEVBQWlEQyxXQUFqRCxHQUErRGQsTUFBTVUsUUFBckU7QUFDQTFDLG9CQUFrQjRDLFFBQWxCLENBQTJCQyxTQUEzQixDQUFxQyxlQUFyQyxFQUFzREMsV0FBdEQsR0FBb0VkLE1BQU1nQixpQkFBMUU7QUFDQWpELGFBQVc0QixJQUFYLENBQWdCOUIsR0FBaEIsRUFBcUJDLE1BQXJCOztBQUVBRixXQUFTMEIsSUFBVCxDQUFjVSxNQUFNVSxRQUFwQjtBQUNBTyxVQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQnRELFFBQTNCO0FBQ0QsQ0E5QkQ7O0FBaUNBLGVBQWVLLE9BQWYiLCJmaWxlIjoiZ21hcEluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGxhY2VzSWQgPSBbXTtcbnZhciBtYXAsIG1hcmtlciwgaW5mb3dpbmRvdywgaW5mb3dpbmRvd0NvbnRlbnQ7XG5cblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xuICAgIGNlbnRlcjogeyBsYXQ6IC0zMy44Njg4LCBsbmc6IDE1MS4yMTk1IH0sXG4gICAgem9vbTogMTMsXG4gIH0pO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWMtaW5wdXRcIik7XG4gIGNvbnN0IGF1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGlucHV0KTtcbiAgYXV0b2NvbXBsZXRlLmJpbmRUbyhcImJvdW5kc1wiLCBtYXApO1xuXG4gIGNvbnN0IGRlc3QxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3QxJyk7XG4gIGNvbnN0IGF1dG9jb21wbGV0ZTEgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShkZXN0MSk7XG4gIGF1dG9jb21wbGV0ZTEuYmluZFRvKCdib3VuZHMnLCBtYXApO1xuXG4gIC8vIFNwZWNpZnkganVzdCB0aGUgcGxhY2UgZGF0YSBmaWVsZHMgdGhhdCB5b3UgbmVlZC5cbiAgYXV0b2NvbXBsZXRlLnNldEZpZWxkcyhbXCJwbGFjZV9pZFwiLCBcImdlb21ldHJ5XCIsIFwibmFtZVwiXSk7XG4gIG1hcC5jb250cm9sc1tnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uVE9QX0xFRlRdLnB1c2goaW5wdXQpO1xuXG4gIGF1dG9jb21wbGV0ZTEuc2V0RmllbGRzKFsncGxhY2VfaWQnLCAnZ2VvbWV0cnknLCAnbmFtZSddKTtcbiAgbWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5UT1BfTEVGVF0ucHVzaChkZXN0MSk7XG5cbiAgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KCk7XG4gIGluZm93aW5kb3dDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvd2luZG93LWNvbnRlbnRcIik7XG4gIGluZm93aW5kb3cuc2V0Q29udGVudChpbmZvd2luZG93Q29udGVudCk7XG5cbiAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7IG1hcDogbWFwIH0pO1xuICBtYXJrZXIuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcbiAgfSk7XG5cbiAgYXV0b2NvbXBsZXRlMS5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsIHBsYWNlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMsIGF1dG9jb21wbGV0ZTEpKVxuICBhdXRvY29tcGxldGUuYWRkTGlzdGVuZXIoJ3BsYWNlX2NoYW5nZWQnLCBwbGFjZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzLCBhdXRvY29tcGxldGUpKTtcbn1cblxuXG52YXIgcGxhY2VDaGFuZ2VIYW5kbGVyID0gKGF1dG9jb21wKSA9PiB7XG5cbiAgaW5mb3dpbmRvdy5jbG9zZSgpO1xuICBsZXQgcGxhY2UgPSBhdXRvY29tcC5nZXRQbGFjZSgpO1xuXG4gIGlmICghcGxhY2UuZ2VvbWV0cnkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpIHtcbiAgICBtYXAuZml0Qm91bmRzKHBsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KTtcbiAgfSBlbHNlIHtcbiAgICBtYXAuc2V0Q2VudGVyKHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uKTtcbiAgICBtYXAuc2V0Wm9vbSgxNyk7XG4gIH1cblxuICAvLyBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBtYXJrZXIgdXNpbmcgdGhlIHBsYWNlIElEIGFuZCBsb2NhdGlvbi5cbiAgbWFya2VyLnNldFBsYWNlKHtcbiAgICBwbGFjZUlkOiBwbGFjZS5wbGFjZV9pZCxcbiAgICBsb2NhdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24sXG4gIH0pO1xuXG4gIG1hcmtlci5zZXRWaXNpYmxlKHRydWUpO1xuICBpbmZvd2luZG93Q29udGVudC5jaGlsZHJlbi5uYW1lZEl0ZW0oXCJwbGFjZS1uYW1lXCIpLnRleHRDb250ZW50ID0gcGxhY2UubmFtZTtcbiAgaW5mb3dpbmRvd0NvbnRlbnQuY2hpbGRyZW4ubmFtZWRJdGVtKFwicGxhY2UtaWRcIikudGV4dENvbnRlbnQgPSBwbGFjZS5wbGFjZV9pZDtcbiAgaW5mb3dpbmRvd0NvbnRlbnQuY2hpbGRyZW4ubmFtZWRJdGVtKFwicGxhY2UtYWRkcmVzc1wiKS50ZXh0Q29udGVudCA9IHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzO1xuICBpbmZvd2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xuXG4gIHBsYWNlc0lkLnB1c2gocGxhY2UucGxhY2VfaWQpO1xuICBjb25zb2xlLmxvZygncGxhY2VzSWQgPSAnLCBwbGFjZXNJZCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRNYXA7XG4iXX0=