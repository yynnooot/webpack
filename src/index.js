const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);

mapboxgl.accessToken = 'pk.eyJ1IjoieXlubm9vb3QiLCJhIjoiY2o4YnFxM2toMDBxOTJ3bzV2c2p4em5yNSJ9.rzQg6zxVZP9qQ6-OZT2enw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

