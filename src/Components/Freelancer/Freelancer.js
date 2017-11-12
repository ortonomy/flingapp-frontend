import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import FreelancerBody from '../FreelancerBody/FreelancerBody';
import freelancer from './Freelancer.module.css';

class Freelancer extends Component {
  render() {
    return (
      <div className={freelancer.Freelancer}>
        <Sidebar />
        <FreelancerBody />
      </div>
    )
  }
}

export default Freelancer;
