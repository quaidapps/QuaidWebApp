import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'

class ProgressIndicator extends Component {
  constructor(props) {
    super(props);

    this.state ={
        anything: 0
    };
}

  render() {
    return (
      <div>
        <Progress percent={this.props.percent} color={this.props.color} />
      </div>
    )
  }
}

export default ProgressIndicator