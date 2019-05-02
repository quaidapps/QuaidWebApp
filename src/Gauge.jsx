import React, {Component} from 'react';

class Gauge extends Component {
    constructor(props) {
        super(props);

        this.state ={
            aqindex: 0
        };
    }

    render(){
        return(
            <div>
                Gauge
            </div>
        );
    }

}

export default Gauge;