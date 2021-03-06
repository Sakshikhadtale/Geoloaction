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
let marker ;

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

  if(mapholder.innerHTML===''){

  map = new google.maps.Map(mapholder, myOptions);

}else{
  marker = new google.maps.Marker({
    position: latlon, map: map, title: "You are here!", icon: image
  });

  if (lat==marker.getPosition().lat()&&lon==marker.getPosition().lng())
  {
    console.log(" same coords not updating ")
  }
  else
  {
    marker.setMap(null);
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
      alert(x.innerHTML);

      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      alert(x.innerHTML);

      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      alert(x.innerHTML);

      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      alert(x.innerHTML);

      break;
  }
  // alert(x.innerHTML);

}


setInterval(getLocation, 3000);