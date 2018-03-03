// react
import React, { Component } from 'react';

// library dependencies
import Debug from '../../utils/Debug';

// dependent components
import LoginTab from './components/LoginTab';
import LoginForm from '../LoginForm';
import RegisterForm  from '../RegisterForm';
import Activation from '../Activation';
import Loader from '../Loader';

// styles
import styles from './LoginNav.module.css';

class LoginNav extends Component {
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
  }

  getContent(displayComponent, path) {
    return (
      <div className={styles.LoginNav}>
        <div className={styles.LoginTabs}>
          <LoginTab
            text="Log in"
            path="/login"
            active={path === '/login' ? true : false}
          />
          <LoginTab
            text="Register"
            path="/register"
            active={path === '/register' ? true : false }
          />
        </div>
        <div className={styles.Body}>
          { displayComponent }
        </div>
      </div>
    );
  }

  render() {
    // debug
    Debug.log('[render] of <LoginNav>: ', this.props);
    // props
    const { path, submit } = this.props;
    // determine which path and which component or redirect behaviour
    switch ( path ) {
      case '/activation': {
        return this.getContent((<Activation />), path);
      }
      case '/login': {
        return this.getContent((<LoginForm submit={submit} />), path);
      }
      case '/register': {
        return this.getContent((<RegisterForm submit={submit} />), path);
      }
      default: {
        return (<Loader />);
      }
    }
  }
}

export default LoginNav;
