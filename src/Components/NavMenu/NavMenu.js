import React, { Component } from 'react';
import './NavMenu.css';

class NavMenu extends Component {
  render() {
    return (
      <div className="NavMenu">
        <div className="active nav-menu-item">Freelancers</div>
        <div className="nav-menu-item">Projects</div>
      </div>
    )
  }
}

export default NavMenu;
