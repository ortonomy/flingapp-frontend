import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import banner from './NavBanner.module.css';
import logo from '../../assets/images/web-title.png';

export class NavBanner extends Component {
  constructor(props) {
    super(props);
    this.getLoggedInUser = this.getLoggedInUser.bind(this);
  }

  getLoggedInUser() {
    return this.props.state.Login.user;
  }

  render() {
    return (
      <div className={banner.NavBanner}>
        <img src={logo} alt="Fling.App"/>
        <Avatar user={this.getLoggedInUser()} />
      </div>
    )
  }
}

export default connect(state => ({state: state}),null)(NavBanner);
