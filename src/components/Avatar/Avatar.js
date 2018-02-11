import React, { Component } from 'react';
import styles from './Avatar.module.css';
import { connect } from 'react-redux';
import md5 from 'md5';

@connect(
  state => ({
    state: state
  }),
  null
)
class Avatar extends Component {
  constructor(props) {
    super(props);
    this.getUserName = this.getUserName.bind(this);
    this.getEmailHash = this.getEmailHash.bind(this);
    this.getGravatarURL = this.getGravatarURL.bind(this);
  }

  getUserName() {
    const lastName = this.props.state.Login.user.userLastName;
    const firstName = this.props.state.Login.user.userFirstName;
    return `${firstName} ${lastName}`;
  }

  getEmailHash() {
    const email = this.props.state.Login.user.userEmail.trim();
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
