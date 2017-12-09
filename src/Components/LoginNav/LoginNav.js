// basic react
import React, { Component } from 'react';

// dependent components
import LoginTab from './components/LoginTab';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm  from '../RegisterForm'

// styles
import styles from './LoginNav.module.css';

class LoginNav extends Component {

  render() {
    return(
      <div className={styles.LoginNav}>
        <div className={styles.LoginTabs}>
          <LoginTab
            text="Log in"
            path="/login" 
            active={this.props.path === '/login' ? true : false} 
          />
          <LoginTab 
            text="Register"
            path="/register"
            active={this.props.path === '/register' ? true : false } 
          />
        </div>
        <div className={styles.Body}>
          { this.props.path === '/register' && (
            <RegisterForm />
          )}
          { this.props.path === '/login' && (
            <LoginForm />
          )}
        </div>
      </div>
    )
  }
}

export default LoginNav;
