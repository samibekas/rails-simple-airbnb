import GMaps from 'gmaps';
// TODO: Put your JS code in here
const APIKey = 'AIzaSyCksPM_FclDZGRwMa7gSdMs2q0MIYVceQw';
const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';

const input = document.getElementById('map').dataset.markers;

fetch(`${baseUrl}address=${input}&key=${APIKey}`)
  .then(response => response.json())
  .then((data) => {
    const lat = data.results[0].geometry.location.lat;
    const lng = data.results[0].geometry.location.lng;
    // const latReference = document.getElementById("lat");
    // latReference.innerText = lat;
    // const lngReference = document.getElementById("lng");
    // lngReference.innerText = lng;
    const map = new GMaps({ el: '#map', lat: lat, lng: lng, zoom: 14 });
    const marker = { lat: lat, lng: lng };
    map.addMarkers([marker]);
});

