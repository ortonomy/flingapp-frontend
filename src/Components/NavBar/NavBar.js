import React, { Component } from 'react';
import NavBanner from '../NavBanner/NavBanner';
import NavMenu from '../NavMenu/NavMenu';
import nav from './NavBar.module.css';

class NavBar extends Component {
  render() {
    return (
      <div className={nav.NavBar}>
        <NavBanner />
        <NavMenu   />
      </div>
    )
  }
}

export default NavBar;
