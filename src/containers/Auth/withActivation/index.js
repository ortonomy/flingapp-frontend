// react
import React, { Component } from 'react';

// library dependencies
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//debug 
import Debug from '../../../utils/Debug';


const withActivation = (ProtectedComponent) => {
  
  @connect(
    state => (
      {
        Login: state.Login
      }
    ),
    null
  )
  class HasActivation extends Component {
    render() {
      Debug.log('[render] of <withActivation>: ', this.props);
      const { Login } = this.props;
      if ( Login.activated ) {
        return (<ProtectedComponent {...this.props} />);
      } else {
        return (<Redirect to='/activation' />);
      }
    }
  }

  return withRouter(HasActivation);
}

export default withActivation;