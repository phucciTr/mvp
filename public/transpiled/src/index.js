

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13
  });
  // const input = document.getElementById("pac-input");
  // const autocomplete = new google.maps.places.Autocomplete(input);
  // autocomplete.bindTo("bounds", map);
  // // Specify just the place data fields that you need.
  // autocomplete.setFields(["place_id", "geometry", "name"]);
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // const infowindow = new google.maps.InfoWindow();
  // const infowindowContent = document.getElementById("infowindow-content");
  // infowindow.setContent(infowindowContent);
  // const marker = new google.maps.Marker({ map: map });
  // marker.addListener("click", () => {
  //   infowindow.open(map, marker);
  // });
  // autocomplete.addListener("place_changed", () => {
  //   infowindow.close();
  //   const place = autocomplete.getPlace();

  //   if (!place.geometry) {
  //     return;
  //   }

  //   if (place.geometry.viewport) {
  //     map.fitBounds(place.geometry.viewport);
  //   } else {
  //     map.setCenter(place.geometry.location);
  //     map.setZoom(17);
  //   }
  //   // Set the position of the marker using the place ID and location.
  //   marker.setPlace({
  //     placeId: place.place_id,
  //     location: place.geometry.location,
  //   });
  //   marker.setVisible(true);
  //   infowindowContent.children.namedItem("place-name").textContent = place.name;
  //   infowindowContent.children.namedItem("place-id").textContent =
  //     place.place_id;
  //   infowindowContent.children.namedItem("place-address").textContent =
  //     place.formatted_address;
  //   infowindow.open(map, marker);
  // });
}

initMap();

// export default initMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0TWFwIiwibWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJ6b29tIl0sIm1hcHBpbmdzIjoiOztBQUdFLFNBQVNBLE9BQVQsR0FBbUI7QUFDakIsUUFBTUMsTUFBTSxJQUFJQyxPQUFPQyxJQUFQLENBQVlDLEdBQWhCLENBQW9CQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXBCLEVBQW9EO0FBQzlEQyxZQUFRLEVBQUVDLEtBQUssQ0FBQyxPQUFSLEVBQWlCQyxLQUFLLFFBQXRCLEVBRHNEO0FBRTlEQyxVQUFNO0FBRndELEdBQXBELENBQVo7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFHRFY7O0FBSUYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4gIGZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xuICAgICAgY2VudGVyOiB7IGxhdDogLTMzLjg2ODgsIGxuZzogMTUxLjIxOTUgfSxcbiAgICAgIHpvb206IDEzLFxuICAgIH0pO1xuICAgIC8vIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWMtaW5wdXRcIik7XG4gICAgLy8gY29uc3QgYXV0b2NvbXBsZXRlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoaW5wdXQpO1xuICAgIC8vIGF1dG9jb21wbGV0ZS5iaW5kVG8oXCJib3VuZHNcIiwgbWFwKTtcbiAgICAvLyAvLyBTcGVjaWZ5IGp1c3QgdGhlIHBsYWNlIGRhdGEgZmllbGRzIHRoYXQgeW91IG5lZWQuXG4gICAgLy8gYXV0b2NvbXBsZXRlLnNldEZpZWxkcyhbXCJwbGFjZV9pZFwiLCBcImdlb21ldHJ5XCIsIFwibmFtZVwiXSk7XG4gICAgLy8gbWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5UT1BfTEVGVF0ucHVzaChpbnB1dCk7XG4gICAgLy8gY29uc3QgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KCk7XG4gICAgLy8gY29uc3QgaW5mb3dpbmRvd0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm93aW5kb3ctY29udGVudFwiKTtcbiAgICAvLyBpbmZvd2luZG93LnNldENvbnRlbnQoaW5mb3dpbmRvd0NvbnRlbnQpO1xuICAgIC8vIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoeyBtYXA6IG1hcCB9KTtcbiAgICAvLyBtYXJrZXIuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICBpbmZvd2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xuICAgIC8vIH0pO1xuICAgIC8vIGF1dG9jb21wbGV0ZS5hZGRMaXN0ZW5lcihcInBsYWNlX2NoYW5nZWRcIiwgKCkgPT4ge1xuICAgIC8vICAgaW5mb3dpbmRvdy5jbG9zZSgpO1xuICAgIC8vICAgY29uc3QgcGxhY2UgPSBhdXRvY29tcGxldGUuZ2V0UGxhY2UoKTtcblxuICAgIC8vICAgaWYgKCFwbGFjZS5nZW9tZXRyeSkge1xuICAgIC8vICAgICByZXR1cm47XG4gICAgLy8gICB9XG5cbiAgICAvLyAgIGlmIChwbGFjZS5nZW9tZXRyeS52aWV3cG9ydCkge1xuICAgIC8vICAgICBtYXAuZml0Qm91bmRzKHBsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIG1hcC5zZXRDZW50ZXIocGxhY2UuZ2VvbWV0cnkubG9jYXRpb24pO1xuICAgIC8vICAgICBtYXAuc2V0Wm9vbSgxNyk7XG4gICAgLy8gICB9XG4gICAgLy8gICAvLyBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBtYXJrZXIgdXNpbmcgdGhlIHBsYWNlIElEIGFuZCBsb2NhdGlvbi5cbiAgICAvLyAgIG1hcmtlci5zZXRQbGFjZSh7XG4gICAgLy8gICAgIHBsYWNlSWQ6IHBsYWNlLnBsYWNlX2lkLFxuICAgIC8vICAgICBsb2NhdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24sXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIG1hcmtlci5zZXRWaXNpYmxlKHRydWUpO1xuICAgIC8vICAgaW5mb3dpbmRvd0NvbnRlbnQuY2hpbGRyZW4ubmFtZWRJdGVtKFwicGxhY2UtbmFtZVwiKS50ZXh0Q29udGVudCA9IHBsYWNlLm5hbWU7XG4gICAgLy8gICBpbmZvd2luZG93Q29udGVudC5jaGlsZHJlbi5uYW1lZEl0ZW0oXCJwbGFjZS1pZFwiKS50ZXh0Q29udGVudCA9XG4gICAgLy8gICAgIHBsYWNlLnBsYWNlX2lkO1xuICAgIC8vICAgaW5mb3dpbmRvd0NvbnRlbnQuY2hpbGRyZW4ubmFtZWRJdGVtKFwicGxhY2UtYWRkcmVzc1wiKS50ZXh0Q29udGVudCA9XG4gICAgLy8gICAgIHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgIC8vICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcbiAgICAvLyB9KTtcbiAgfVxuXG5cbiAgaW5pdE1hcCgpO1xuXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgaW5pdE1hcDtcblxuIl19