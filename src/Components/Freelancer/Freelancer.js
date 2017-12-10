import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import FreelancerBody from '../FreelancerBody/FreelancerBody';
import UserIsAuthenticated from '../Auth/UserIsAuthenticated';
import freelancer from './Freelancer.module.css';

@UserIsAuthenticated
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
