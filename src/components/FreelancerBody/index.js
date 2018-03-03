import React, { Component } from 'react';
import FreelancerBanner from '../FreelancerBanner';
import FreelancerInfo from '../FreelancerInfo';
import body from './FreelancerBody.module.css';

class FreelancerBody extends Component {
  render() {
    if (!this.props.loading) {
    return (
      <div className={body.FreelancerBody}>
        <FreelancerBanner name={this.props.freelancer.flFirstName + ' ' + this.props.freelancer.flLastName} title='Chief Editor' status='active' />
        <FreelancerInfo freelancer={this.props.freelancer} />
      </div>
    )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

export default FreelancerBody;
