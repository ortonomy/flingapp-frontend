import React, { Component } from 'react';
import NavBanner from '../NavBanner/NavBanner';
import NavMenu from '../NavMenu/NavMenu';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavBanner />
        <NavMenu   />
      </div>
    )
  }
}

export default NavBar;
