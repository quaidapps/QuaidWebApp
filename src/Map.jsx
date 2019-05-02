import React, {Component} from 'react';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state ={
            longitude: '',
            latitude: ''
        };
    }

    render(){
        return(
            <div>
                Map
            </div>
        );
    }

}

export default Map;