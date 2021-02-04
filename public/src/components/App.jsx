var App = () => (
  <div id="map-display">
    <h1>Hello</h1>
    <div>
      <input
      id="pac-input"
      className="controls"
      type="text"
      placeholder="Enter a location"/>
    </div>

    <div id="map"></div>
    <div id="infowindow-content">
      <span id="place-name" className="title"></span><br />
      <strong>Place ID:</strong> <span id="place-id"></span><br />
      <span id="place-address"></span>
    </div>
  </div>
);

export default App;