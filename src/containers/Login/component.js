// basic react
import React, { Component } from 'react';

//library dependencies
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// component dependencies
import isLoggedInRedirect from '../Auth/isLoggedInRedirect';
import LoginNav from '../../components/LoginNav/LoginNav';
import LoginFooter from '../../components/LoginFooter';

// styles
import styles from './Login.module.css';

// copy and assets
import logo from '../../assets/images/full_title_compact_trans@svg.svg';
import { LoginFooter as LoginFooterCopy } from '../../assets/copy/Login';

//debug
import Debug from '../../utils/Debug';

// actions
import { actions } from './actions';

@connect(
  null,
  dispatch => ({
    register: bindActionCreators(actions.register, dispatch),
    login: bindActionCreators(actions.login, dispatch)
  })
)
class Login extends Component {
    constructor (props) {
        super(props);

        this.handleData = this.handleData.bind(this);
    }

    handleData(data) {
      Debug.log('handleData in <Login>: ', data);
      if ( data.type === 'REGISTERFORM' ) {
          // deal with registration
         const { firstName, lastName, email, password } = data;
         this.props.register({ firstName, lastName, email, password});
      } else if ( data.type === 'LOGINFORM' ) {
         // deal with login
         const { email, password } = data;
         this.props.login({ email, password });
      }
    }

    render() {
      Debug.log('[render] of <Login>: ', this.props);
      return (
        <div className={styles.Login}>
          <div className={styles.Content}>
            <div className={styles.Image}>
              <Link to="/"><img src={logo} alt="Fling" /></Link>
            </div>
            <LoginNav
                path={this.props.location.pathname}
                submit={this.handleData}
            />
            <LoginFooter
                links={[LoginFooterCopy.link1,LoginFooterCopy.link2]}
            />
          </div>
        </div>
      )
    }
}

export default isLoggedInRedirect(Login);
