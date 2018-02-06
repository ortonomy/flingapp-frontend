// basic react
import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import FreelancerBody from '../../components/FreelancerBody/FreelancerBody';

// styles
import freelancer from './Freelancer.module.css';

//library dependencies
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// component dependencies
import isLoggedInRedirect from '../Auth/isLoggedInRedirect';

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
