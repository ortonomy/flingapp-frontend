// react
import React, { Component } from 'react';

// library dependencies
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//debug 
import Debug from '../../../utils/Debug';


const withLogin = (ProtectedComponent) => {
  
  @connect(
    state => (
      {
        Login: state.Login
      }
    ),
    null
  )
  class HasLogin extends Component {
    render() {
      Debug.log('[render] of <withLogin>: ', this.props);
      const { Login } = this.props;
      if ( Login.loggedIn ) {
        return (<ProtectedComponent {...this.props} />);
      } else {
        return (<Redirect to='/login' />);
      }
    }
  }

  return withRouter(HasLogin);
}

export default withLogin;