import React, { Component } from 'react';
import styles from './Avatar.module.css';

class Avatar extends Component {
  render() {
    return(
      <div className={styles.Avatar}>
        <div className={styles.user}>Gregory O.</div>
        <div className={styles.arrow}></div>
        <img className={styles.gravatar} src="https://www.gravatar.com/avatar/HASH" alt="gravatar" />
      </div>
    )
  }
}

export default Avatar;
