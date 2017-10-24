import React, { Component } from 'react';
import './Avatar.css';

class Avatar extends Component {
  render() {
    return(
      <div className="Avatar">
        <div>Gregory O.</div>
        <div className="arrow-down"></div> 
        <img src="https://www.gravatar.com/avatar/HASH" alt="gravatar" />
      </div>
    )
  }
}

export default Avatar;
