import React, { Component } from 'react';
import firebase from './utils/Firebase';
import Maps from './map/Maps';
// import './map/Map.css';
import Gauge from './Gauge';
import PageHeader from './PageHeader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      gaugeValue: 0.1, 
      gaugeColor: 'grey'
      // zoom: 13,
      // maptype: 'roadmap',
      // place_formatted: '',
      // place_id: '',
      // place_location: ''
    };
  }
  componentWillMount(){
    let espRef = firebase.database().ref('ESP8266_Test');
    let colorsArray = ['grey', 'blue', 'teal', 'olive', 'green', 'yellow', 'orange', 'purple', 'red', 'red'];
    espRef.on('child_changed', snapshot => {
      let gaugeVal = { text: snapshot.val() };
      this.setState({ gaugeValue: '' });
      this.setState({ gaugeValue: gaugeVal.text });
      console.log(Math.floor(gaugeVal.text/10));
      let myColor = colorsArray[Math.floor(gaugeVal.text/10)];
      console.log(myColor);
      this.setState({gaugeColor: `${myColor}`})
  
    });
  }

  componentDidMount() {
    // let map = new window.google.maps.Map(document.getElementById('map'), {
    //   center: {lat: -33.8688, lng: 151.2195},
    //   zoom: 13,
    //   mapTypeId: 'roadmap',
    // });

    // map.addListener('zoom_changed', () => {
    //   this.setState({
    //     zoom: map.getZoom(),
    //   });
    // });

    // map.addListener('maptypeid_changed', () => {
    //   this.setState({
    //     maptype: map.getMapTypeId(),
    //   });
    // });

    // let marker = new window.google.maps.Marker({
    //   map: map,
    //   position: {lat: -33.8688, lng: 151.2195},
    // });

    // initialize the autocomplete functionality using the #pac-input input box
    // let inputNode = document.getElementById('pac-input');
    // map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
    // let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

    // autoComplete.addListener('place_changed', () => {
    //   let place = autoComplete.getPlace();
    //   let location = place.geometry.location;

    //   this.setState({
    //     place_formatted: place.formatted_address,
    //     place_id: place.place_id,
    //     place_location: location.toString(),
    //   });

    //   // bring the selected place in view on the map
    //   map.fitBounds(place.geometry.viewport);
    //   map.setCenter(location);

    //   marker.setPlace({
    //     placeId: place.place_id,
    //     location: location,
    //   });
    // });
  }

  render() {
    return (
        <div>
          <PageHeader />
          <div >
          {/*<div className="ui hidden divider"></div> */}
            <div className="ui vertical masthead center aligned segment">

            <Gauge gaugeValue={this.state.gaugeValue} gaugeColor={this.state.gaugeColor} />
            <Maps />

            </div>
          </div>
        </div>
    );
  }
}

export default App;