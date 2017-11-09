import React, { Component } from 'react';
import styles from './Create.module.css';


class Create extends Component {
  render() {
    return (
      <div className={styles.Create}>
        <div className={styles.sectionTitle}>
          <i className='fa fa-plus-circle'></i>
          <span>Create</span>
         </div>
         <div className={styles.link}>
            New Freelancer
         </div>
         <div className={styles.link}>
            New Project
         </div>
      </div>
    )
  }
}

export default Create;
