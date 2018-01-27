// react
import React, { Component } from 'react';

// library dependencies
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//debug 
import Debug from '../../../utils/Debug';


const isLoggedInRedirect = (WrappedComponent) => {
  
  @connect(
    state => (
      {
        Login: state.Login
      }
    ),
    null
  )
  class LoggedInRedirect extends Component {
    render() {
      Debug.log('[render] of <isLoggedInRedirect>: ', this.props);
      const { Login } = this.props;
      const { pathname } = this.props.location;
      if ( Login.loggedIn && !Login.activated && /[^\/activation]{1}/.test(pathname) ) {
        return (<Redirect to='/activation' />);
      } else if ( Login.loggedIn && Login.activated ) {
        return (<Redirect to='/main' />);
      } else if ( /[^\/login|\/register]{1}/.test(pathname)  && !Login.loggedIn ) {
        return (<Redirect to='/login' />);
      } else {
        return (<WrappedComponent {...this.props} />);
      }
    }
  }

  return withRouter(LoggedInRedirect);
}

export default isLoggedInRedirect;