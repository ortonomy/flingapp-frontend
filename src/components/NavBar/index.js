import React, { Component } from 'react';
import NavBanner from '../NavBanner';
import NavMenu from '../NavMenu';
import nav from './NavBar.module.css';

class NavBar extends Component {
  render() {
    return (
      <div className={nav.NavBar}>
        <NavBanner user={this.props.user} />
        <NavMenu   />
      </div>
    )
  }
}

export default NavBar;
