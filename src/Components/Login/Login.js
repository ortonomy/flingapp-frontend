import React, { Component } from 'react';
import './Login.css';
import logo from '../../assets/images/full_title_compact_trans.png';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="login-box">
                    <img src={logo} alt="Fling" />
                </div>
            </div>
        )
    }
}

export default Login;
