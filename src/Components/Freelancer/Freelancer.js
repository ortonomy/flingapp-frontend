import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import FreelancerBody from '../FreelancerBody/FreelancerBody';
import './Freelancer.css';

class Freelancer extends Component {
  render() {
    return (
      <div className="Freelancer">
        <Sidebar />
        <FreelancerBody />
      </div>
    )
  }
}

export default Freelancer;
