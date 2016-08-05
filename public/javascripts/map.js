var map;
var positions;

$.ajax({
  url: "/positions",
}).done(function(data) {
    positions = data;
    console.log(positions);
    initMap();
  });

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
