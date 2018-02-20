// react
import React, { Component } from 'react';

// library dependencies
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//debug 
import Debug from '../../../utils/Debug';


const withOrg = (ProtectedComponent) => {
  
  @connect(
    state => (
      {
        Login: state.Login,
      }
    ),
    null
  )
  class HasOrg extends Component {
    render() {
      Debug.log('[render] of <withOrg>: ', this.props);
      const { Login } = this.props;
      if ( Login.user.userOrg ) {
        return (<ProtectedComponent {...this.props} />);
      } else {
        return (<Redirect to='/enroll' />);
      }
    }
  }

  return HasOrg;
}

export default withOrg;