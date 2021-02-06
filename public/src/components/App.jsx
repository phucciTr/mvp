var App = () => (
  <div id="map-display">
    <h1>Hello</h1>
    <a href="" id="url"></a>
    <div>
      <input
      id="start-point"
      className="controls"
      type="text"
      placeholder="Enter start location"/>

    <input
      id="end-point"
      className="controls"
      type="text"
      placeholder="Enter final destination" />
    </div>

    <input type="submit" id="submit"/>
    <span id="dest">Enter destinations</span>
    <input
    id="waypoints"
    className="controls"
    type="text"
    placeholder="Enter en-route destinations" />

    <div id="right-panel"></div>
    <div id="map"></div>
    <div id="infowindow-content">
      <span id="place-name" className="title"></span><br />
      <span id="place-address"></span>
    </div>
  </div>
);

export default App;