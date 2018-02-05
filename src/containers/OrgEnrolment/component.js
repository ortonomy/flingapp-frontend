// react
import React, { Component } from 'react';

//library dependencies
import { Link } from 'react-router-dom';

// styles
import styles from './style.module.css';

// copy and assets
import logo from '../../assets/images/full_title_compact_trans@svg.svg';

class OrgEnrolment extends Component {
  render() {
    return (
      <div className={styles.Body}>
        <div className={styles.Content}>
          <div className={styles.Image}>
              <Link to="/"><img src={logo} alt="Fling" /></Link>
          </div>
          <div className={styles.Components} >
            <p>Some Content</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OrgEnrolment;