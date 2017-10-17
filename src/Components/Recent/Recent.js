import React, { Component } from 'react';
import './Recent.css';


class Recent extends Component {
  render() {
    return (
      <div className="Recent">
        <div className='sidebar-section-title'>
          <i className='fa fa-eye'></i>
          <span>Recently Viewed</span>
        </div>
      </div>
    )
  }
}

export default Recent;
