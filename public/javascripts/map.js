var map;
var positions;

$.ajax({
  url: "/positions",
}).done(function(data) {
    positions = data;
    initMap(positions);
  });

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.7392, lng: -104.9903},
    zoom: 8
  });
  positions.forEach(function(position){
    if(position.position != null){
      var coordString = position.position;
      var commaIndex = coordString.indexOf(',')
      var long = Number(coordString.slice(commaIndex+1));
      var lat = Number(coordString.slice(0,commaIndex));
      var marker = new google.maps.Marker({
        position: {lat: lat, lng: long},
        map: map,
        title: 'Hello World!'
      });
    }
  })
}
