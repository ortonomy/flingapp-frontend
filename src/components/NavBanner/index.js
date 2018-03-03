import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '../Avatar';
import banner from './NavBanner.module.css';
import logo from '../../assets/images/web-title.png';

class NavBanner extends Component {

  render() {
    return (
      <div className={banner.NavBanner}>
        <img src={logo} alt="Fling.App"/>
        <Avatar user={this.props.user} />
      </div>
    )
  }
}

export default NavBanner;
