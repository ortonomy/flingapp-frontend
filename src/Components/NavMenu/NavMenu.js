import React, { Component } from 'react';
import menu from './NavMenu.module.css';

class NavMenu extends Component {
  render() {
    return (
      <div className={menu.NavMenu}>
        <div className={menu.active}>Freelancers</div>
        <div className={menu.item}>Projects</div>
      </div>
    )
  }
}

export default NavMenu;
