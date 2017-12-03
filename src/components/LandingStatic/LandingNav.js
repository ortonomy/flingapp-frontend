// basic react imports
import React from 'react';

// styles
import styles from './LandingNav.module.css';

// dependent components
import LandingButton from './LandingButton';

// assets
import WebTitle from '../../assets/images/web-title@svg.svg';

const LandingNav = (props) => {
  return (
    <div className={styles.NavBar}>
      <img className={styles.NavBarLogo} src={WebTitle} alt='small logo' />
      <div className={styles.NavBarNavItems}>
        <div><span>Register</span></div>
        <div><span>Log in</span></div>
      </div>
    </div>
  )
}

export default LandingNav;