import React, { Component } from 'react';
import login from './Login.module.css';
import LoginNav from '../LoginNav/LoginNav';
import logo from '../../assets/images/full_title_compact_trans.png';

class Login extends Component {
    render() {
        return (
            <div className={login.Login}>
                <div className={login.box}>
                    <div className={login.image}>
                      <img src={logo} alt="Fling" />
                    </div>
                    <LoginNav className={login.nav}/>
                    <div className={login.footer}>
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
