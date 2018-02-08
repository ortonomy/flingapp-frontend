import React, { Component } from 'react';
import FreelancerBanner from '../FreelancerBanner/FreelancerBanner';
import FreelancerInfo from '../FreelancerInfo/FreelancerInfo';
import body from './FreelancerBody.module.css';

class FreelancerBody extends Component {
  render() {
    const name = this.props.freelancer.flFirstName + ' ' + this.props.freelancer.flLastName
    return (
      <div className={body.FreelancerBody}>
        <FreelancerBanner name={name} title='Chief Editor' status='active' />
        <FreelancerInfo freelancer={this.props.freelancer} />
      </div>
    )
  }
}

export default FreelancerBody;
