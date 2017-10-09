import React, { Component } from 'react';
import InfoTable from '../InfoTable/InfoTable';
import './FreelancerInfo.css';

const info = {
  'first name': 'Jorge',
  'last name': 'Brock'
}

class FreelancerInfo extends Component {
  render() {
    return (
      <div className='FreelancerInfo'>
        <InfoTable title='Personal Information' info={info}/>
        <InfoTable title='Professional Information' info={info}/>
        <InfoTable title='Experience' info={info}/>
      </div>
    )
  }
}

export default FreelancerInfo;
