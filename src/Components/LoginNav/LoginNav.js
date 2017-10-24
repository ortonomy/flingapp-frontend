import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './LoginNav.css'

class LoginNav extends Component {
    render() {
        return(
            <div className="LoginNav">
                <div className="tabs">
                    <span className="active tab">Login</span>
                    <span className="tab">Register</span>
                </div>
                <div className="login-body">
                    <LoginForm />
                </div>
            </div>
        )
    }
}

export default LoginNav;
