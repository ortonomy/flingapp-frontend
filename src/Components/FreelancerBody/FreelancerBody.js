import React, { Component } from 'react';
import FreelancerBanner from '../FreelancerBanner/FreelancerBanner';
import FreelancerInfo from '../FreelancerInfo/FreelancerInfo';
import './FreelancerBody.css';

class FreelancerBody extends Component {
  render() {
    return (
      <div className='FreelancerBody'>
        <FreelancerBanner name='Jorge Brock' title='Chief Editor' status='active' />
        <FreelancerInfo />
      </div>
    )
  }
}

export default FreelancerBody;
