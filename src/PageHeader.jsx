import React, { Component } from 'react';

class PageHeader extends Component {
  render() {
    return (
      <div className="ui borderless large inverted grey menu ">
        <div className="ui label item">
            <img alt="logo" className="logo" src="/cc-cc0_icon.svg"/>
        </div>  
        <div className="ui label item white huge">
            Quaid
        </div>  
      	<div className="right menu">
      	</div>
      </div>
     )
  }
}

export default PageHeader
