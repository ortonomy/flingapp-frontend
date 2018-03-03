// basic react imports
import React, { Component }from 'react';

// component dependencies
import LandingNavItems from './LandingNavItems';

// styles
import styles from './LandingNav.module.css';

// assets
import WebTitle from '../../assets/images/web-title@svg.svg';

class LandingNav extends Component {
  constructor(props) {
    super(props);

    this.navItems = this.props.loggedIn === true ? [
      {
        href: '/main',
        text: `Go to app`
      },
      {
        href: '/logout',
        text: 'Log out'
      }
    ] : [
      {
        href: '/login',
        text: `Log in`
      },
      {
        href: '/register',
        text: 'Register'
      }
    ];
  }
  render() {
    return (
      <div className={styles.NavBar}>
        <img className={styles.NavBarLogo} src={WebTitle} alt='small logo' />
        <LandingNavItems items={this.navItems} />
      </div>
    )
  }
}

export default LandingNav;
