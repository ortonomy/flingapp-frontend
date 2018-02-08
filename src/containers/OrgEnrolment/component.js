// author: @ortonomy, Feb 2018 v1

// react
import React, { Component } from 'react';

//library dependencies
import { Link } from 'react-router-dom';

// component dependencies 
import EnrollmentForms from '../../components/EnrollmentForms';
import FormText from '../../components/FormText';

// styles
import styles from './style.module.css';

// copy and assets
import logo from '../../assets/images/full_title_compact_trans@svg.svg';

// in-component copy
const instructionText = `Find or create an organization.`;

class OrgEnrolment extends Component {
  render() {
    return (
      <div className={styles.Body}>
        <div className={styles.Content}>
          <div className={styles.Image}>
            <Link to="/"><img src={logo} alt="Fling" /></Link>
          </div>
          <div className={styles.Components} >
            <FormText text={instructionText}/>
            <EnrollmentForms />
          </div>
        </div>
      </div>
    );
  }
}

export default OrgEnrolment;