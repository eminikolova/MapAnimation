// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-90.19563875264437,38.6175565997373],
  [-90.19814171159834,38.618014988744335],
  [-90.19967473858597,38.61832490685691],
  [-90.20116062170041,38.6186267841573],
  [-90.20448178929672,38.61930895283001],
  [-90.2049455503959,38.6182186146068],
  [-90.2058530765199,38.61543315128253],
  [-90.20563226656022,38.61514735603291],
  [-90.20429535730491,38.61471432088533],
  [-90.2061650077219,38.612720423249925],
  [-90.2077995147552,38.61319937161667],
  [-90.21188407783147,38.61371590505132],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-90.19563875264437,38.6175565997373],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker().setLngLat([-71.093729, 42.359244]).addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() => {
    if (counter == busStops.length) {
      counter=0;
    }
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 500);
}