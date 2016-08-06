$(document).ready(function(){
  var position;
  navigator.geolocation.getCurrentPosition(function(position) {
    position = position.coords.latitude.toString()+','+position.coords.longitude.toString();
    $.cookie('geolocation1', position);
  });
})
