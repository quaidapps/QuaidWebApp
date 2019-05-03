import React, { Component } from 'react';
import firebase from './utils/Firebase';
import Map from './Map';
import Gauge from './Gauge';
import PageHeader from './PageHeader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  gaugeValue: 0.1, gaugeColor: 'grey' };
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


  render() {
    return (
        <div>
          <PageHeader />
          <div >
          {/*<div className="ui hidden divider"></div> */}
            <div className="ui vertical masthead center aligned segment">

            <Gauge gaugeValue={this.state.gaugeValue} gaugeColor={this.state.gaugeColor} />
            <Map />

            </div>
          </div>
        </div>
    );
  }
}

export default App;