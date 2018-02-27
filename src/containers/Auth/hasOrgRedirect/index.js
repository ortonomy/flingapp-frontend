// react
import React, { Component } from 'react';

// library dependencies
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//debug 
import Debug from '../../../utils/Debug';


const hasOrgRedirect = (WrappedComponent) => {
  
  @connect(
    state => (
      {
        Login: state.Login,
        Org: state.Org
      }
    ),
    null
  )
  class hasOrgRedirector extends Component {
    render() {
      Debug.log('[render] of <hasOrgRedirect>: ', this.props);
      const { Login, Org } = this.props;
      if ( Login.user.userOrg && !Org.enrolment.created ) {
        return (<Redirect to='/main' />);
      } else {
        return (<WrappedComponent {...this.props} />);
      }
    }
  }

  return hasOrgRedirector;
}

export default hasOrgRedirect;