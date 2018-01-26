// react
import React, { Component } from 'react';

// library dependencies
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// styles
import styles from './style.module.css';

// appStrings
import { ActivationRequest } from '../../assets/copy/Login.js';

@connect(
  state => ({
    Login: state.Login
  }),
  null
)
class Activation extends Component {
  componentWillReceiveProps(nextProps) {
    if ( !this.props.Login.registered && !this.props.Login.activating ) { // if the user hasn't already registered and waiting to be activated, don't stay here
      this.props.history.push('/register');
    }
  }

  render() {
    return (
      <div className={styles.Element}>
        <ActivationRequest />
      </div>
    )
  }
}

export default withRouter(Activation);