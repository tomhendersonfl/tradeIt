$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude);
  });
})
