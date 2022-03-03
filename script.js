let x=document.getElementById("demo");
    function getLocation()
      {

        console.log("get location called")
      if (navigator.geolocation)
        {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
        }
      else{x.innerHTML="Geolocation is not supported by this browser.";}
      }
    



      
    function showPosition(position)
      {

      var iconBase = 'data:image/png;base64,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';
      // var marker = new google.maps.Marker({
      //   position: latlon,
      //   map: map,
      //   icon: iconBase + 'truck.png'
      // });
      // let  image =
      // "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";



      const image =`./assets/img/truck.png`;
      let lat=position.coords.latitude;
      let lon=position.coords.longitude;
      let latlon=new google.maps.LatLng(lat, lon)
      let mapholder=document.getElementById('mapholder')
      mapholder.style.height='250px';
      mapholder.style.width='100%';
    
      let myOptions={
      center:latlon,zoom:14,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      mapTypeControl:false,
      navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
      };
      let map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
      let marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!",icon: image
    });
      }
    
    function showError(error)
      {
      alert(error)
      switch(error.code) 
        {
        case error.PERMISSION_DENIED:
          x.innerHTML="User denied the request for Geolocation."
          break;
        case error.POSITION_UNAVAILABLE:
          x.innerHTML="Location information is unavailable."
          break;
        case error.TIMEOUT:
          x.innerHTML="The request to get user location timed out."
          break;
        case error.UNKNOWN_ERROR:
          x.innerHTML="An unknown error occurred."
          break;
        }
      }


      setInterval(getLocation(), 1000);