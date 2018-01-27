import React, { Component } from 'react';

// library dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// component dependencies
import Loader from '../../../components/Loader';

// actions
import { actions } from '../../Login/actions';

// styles
import styles from './style.module.css';

@connect(
  null,
  dispatch => (
    {
      logOut: bindActionCreators(actions.logOut, dispatch)
    }
  )
)
class LogOutRedirect extends Component {
  componentDidMount() {
    this.props.logOut(); 
    this.props.history.push('/'); 
  }

  render () {
    return (
      <div className={styles.Main}>
        <Loader />
      </div>
    );
  }
}

export default withRouter(LogOutRedirect);