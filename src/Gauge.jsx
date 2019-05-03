import React, {Component} from 'react';
import ProgressIndicator from './ProgressIndicator'
import { Header } from 'semantic-ui-react'

class Gauge extends Component {
    constructor(props) {
        super(props);

        this.state ={
            anything: 0
        };
    }

    render(){
        return(
            <div>                
                <Header as='h1' color={this.props.gaugeColor ? this.props.gaugeColor : 'grey'}>
                Pollution Level: {this.props.gaugeValue ? this.props.gaugeValue : null}
                </Header>
                
                <ProgressIndicator percent={this.props.gaugeValue} color={this.props.gaugeColor} />
            </div>
        );
    }

}

export default Gauge;