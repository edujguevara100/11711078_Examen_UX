import React, { Component } from 'react';
import logo from '../logo.svg';
class Icon extends Component {
  render(){
    return(
      <div className="Icon">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
export default Icon;
