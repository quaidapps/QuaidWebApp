import React from 'react'
import scriptLoader from 'react-async-script-loader'

// @scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyDHWZrv8FPf8j4ix7tN7rRTlndtrhJBlEU'])
class Mapster extends React.Component {
  constructor(props){
    super(props);
    this.map = null;   
    this.infoWindow = null;

    this.handleLocationError = this.handleLocationError.bind(this);
  }

  handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(this.map);
  }

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        this.map = new window.google.maps.Map(this.refs.map, {
          center: {lat: 32.159214, lng: 34.894479},
          zoom: 17
        });
        this.infoWindow = new window.google.maps.InfoWindow();

        console.log('in componentWillReceiveProps');
        console.log(`${(this.refs.map)}`);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            this.infoWindow.setPosition(pos);
            this.infoWindow.setContent('Location found.');
            this.infoWindow.open(this.map);

            this.map.setCenter(pos);

            // const marker = new window.google.maps.Marker({
            //   position: pos,
            //   map: this.map,
            //   title: 'Hello World!'
            // });                
          }, () => {
            console.log('navigator disabled');
          });
        } else {
          // Browser doesn't support Geolocation
          console.log('navigator disabled');
          this.handleLocationError(false, this.infoWindow, this.map.getCenter());
        }
      }
      // else this.props.onError()
    }
  }

  render(){
    return (    
    <div>
      <div ref="map" className="mapster" style={{height: '50vh', width: '100vw'}}></div>
      { !this.map && <div className="center-md">Loading...</div> } 
    </div>
    )
  }
}

// export default Maps

export default scriptLoader(
  [
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyDHWZrv8FPf8j4ix7tN7rRTlndtrhJBlEU'
  ])(Mapster)