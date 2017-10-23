import React, { Component } from 'react';
import './Create.css';


class Create extends Component {
  render() {
    return (
      <div className="Create">
        <div className='sidebar-section-title'>
          <i className='fa fa-plus-circle'></i>
          <span>Create</span>
         </div>
         <div className='sidebar-link'>
            New Freelancer
         </div>
         <div className='sidebar-link'>
            New Project
         </div>
      </div>
    )
  }
}

export default Create;
