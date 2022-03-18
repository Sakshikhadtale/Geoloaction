let x = document.getElementById("demo");
function getLocation() {

  console.log("get location called")
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  }
  else { x.innerHTML = "Geolocation is not supported by this browser."; }
}
const image = `./assets/img/truck.png`;
let map ;

function showPosition(position) {





  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let latlon = new google.maps.LatLng(lat, lon)
  let mapholder = document.getElementById('mapholder')
  mapholder.style.height = '100%';
  mapholder.style.width = '100%';

  let myOptions = {
    center: latlon, zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
  };
  let marker ;
  marker = new google.maps.Marker({
    position: latlon, map: map, title: "You are here!", icon: image
  });
  if(mapholder.innerHTML===''){
  map = new google.maps.Map(mapholder, myOptions);

}else{


  if (lat==marker.getPosition().lat()&&lon==marker.getPosition().lng())
  {
    console.log(" same coords not updating ")
  }
  else
  {
    console.log("updating cords")
  myLatlng = new google.maps.LatLng(lat,lon);

  marker.setPosition(myLatlng);
  map.setCenter(myLatlng);
}
}
}

function showError(error) {
  // alert(x.innerHTML);
  switch (error.code) {
    case error.PERMISSION_DENIED:

      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
  alert(x.innerHTML);

}


setInterval(getLocation, 3000);