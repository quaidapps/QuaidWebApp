import React, {Component} from 'react';
import './Map.css';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state ={
            longitude: '',
            latitude: ''
        };
    }

    componentDidMount() {
        new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13,
          mapTypeId: 'roadmap'
        });
      }

    render(){
        return(
            <div>
                Map!
                <div id='map' />
            </div>
        );
    }

}

export default Map;