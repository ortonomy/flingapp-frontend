import React, { Component } from 'react';

// library imports
import { Link, withRouter } from 'react-router-dom';

// stylesheets
import menu from './NavMenu.module.css';

@withRouter
class NavMenu extends Component {
  isActive(path) {
    return (this.props.location.pathname === path ? menu.active : menu.item)
  }
  render() {
    console.log(this.props.location.pathname)
    return (
      <div className={menu.NavMenu}>
        <Link to='/freelancer' className={this.isActive('/freelancer')}>Freelancers</Link>
        <Link to='/project' className={this.isActive('/project')}>Projects</Link>
      </div>
    )
  }
}

export default NavMenu;
