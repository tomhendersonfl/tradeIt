var map;

// var coords = JSON.parse($("#myCoords").val());
// console.log(coords);

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
