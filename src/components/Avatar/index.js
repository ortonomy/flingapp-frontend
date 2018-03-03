import React, { Component } from 'react';
import styles from './Avatar.module.css';
import md5 from 'md5';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.getUserName = this.getUserName.bind(this);
    this.getEmailHash = this.getEmailHash.bind(this);
    this.getGravatarURL = this.getGravatarURL.bind(this);
  }

  getUserName() {
    const lastName = this.props.user.userLastName;
    const firstName = this.props.user.userFirstName;
    return `${firstName} ${lastName}`;
  }

  getEmailHash() {
    const email = this.props.user.userEmail.trim();
    return md5(email);
  }

  getGravatarURL(emailHash) {
    return `https://www.gravatar.com/avatar/${emailHash}`;
  }

  render() {
    this.getEmailHash();
    return(
      <div className={styles.Avatar}>
        <div className={styles.user}>{this.getUserName()}</div>
        <div className={styles.arrow}></div>
        <img className={styles.gravatar} src={this.getGravatarURL(this.getEmailHash())} alt="gravatar" />
      </div>
    )
  }
}

export default Avatar;
