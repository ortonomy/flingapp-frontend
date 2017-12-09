import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import nav from './LoginNav.module.css';
import login from '../Login/Login.module.css';

class LoginNav extends Component {
    render() {
        return(
            <div className={nav.LoginNav}>
                <div className={nav.tabs}>
                    <span className={login.active}>Login</span>
                    <span className={login.tab}>Register</span>
                </div>
                <div className={login.body}>
                    <LoginForm />
                </div>
            </div>
        )
    }
}

export default LoginNav;
