import StartPoint from './StartPoint.js';
import EndPoint from './EndPoint.js';
import WayPoints from './WayPoints.js';

var App = () => (
  <div id="map-display">
    <StartPoint/>
    <EndPoint/>
    <WayPoints/>

    <div id="right-panel"></div>
    <div id="map"></div>
    <div id="infowindow-content">
      <span id="place-name" className="title"></span><br />
      <span id="place-address"></span>
    </div>
  </div>
);

export default App;