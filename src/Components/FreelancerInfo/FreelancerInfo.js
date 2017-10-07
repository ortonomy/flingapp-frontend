import React, { Component } from 'react';
import InfoTable from '../InfoTable/InfoTable';
import './FreelancerInfo.css';

class FreelancerInfo extends Component {
  render() {
    return (
      <div className='FreelancerInfo'>
        <InfoTable title='Personal Information' />
        <InfoTable title='Professional Information' />
        <InfoTable title='Experience'/>
      </div>
    )
  }
}

export default FreelancerInfo;
