// basic react imports
import React from 'react';

// library imports
import { Link } from 'react-router-dom';

// styles
import styles from './LandingNav.module.css';

// assets
import WebTitle from '../../assets/images/web-title@svg.svg';

const LandingNav = (props) => {
  return (
    <div className={styles.NavBar}>
      <img className={styles.NavBarLogo} src={WebTitle} alt='small logo' />
      <div className={styles.NavBarNavItems}>
        <div><Link to="/register"><span>Register</span></Link></div>
        <div><Link to="/login"><span>Log in</span></Link></div>
      </div>
    </div>
  )
}

export default LandingNav;