import React, { Component } from 'react';

import Map from './Map';
import Gauge from './Gauge';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null, 
      displayName : null,
      userID: null,
      photo: null
    };
  }

  render() {
    return(
      <div>
        test
        <Map />
        <Gauge />
      </div>
    );
  }

}

export default App;