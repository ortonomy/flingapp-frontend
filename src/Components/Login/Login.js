import React, { Component } from 'react';
import './Login.css';
import LoginForm from '../LoginForm/LoginForm';
import logo from '../../assets/images/full_title_compact_trans.png';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="login-box">
                    <img className="login-image" src={logo} alt="Fling" />
                    <LoginForm />
                    <div className="login-footer">
                        <a href="#">Terms and Conditions</a>
                        |
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
