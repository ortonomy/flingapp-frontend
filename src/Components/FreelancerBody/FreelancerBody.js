import React, { Component } from 'react';
import FreelancerBanner from '../FreelancerBanner/FreelancerBanner';
import FreelancerInfo from '../FreelancerInfo/FreelancerInfo';
import body from './FreelancerBody.module.css';

class FreelancerBody extends Component {
  render() {
    return (
      <div className={body.FreelancerBody}>
        <FreelancerBanner name='Jorge Brock' title='Chief Editor' status='active' />
        <FreelancerInfo />
      </div>
    )
  }
}

export default FreelancerBody;
