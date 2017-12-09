// basic react
import React, { Component } from 'react';

// dependent components
import LoginNav from '../../components/LoginNav/LoginNav';
import LoginFooter from '../../components/LoginFooter';

// styles
import styles from './Login.module.css';

// assets
import logo from '../../assets/images/full_title_compact_trans@svg.svg';

// copy 
import { LoginFooter as LoginFooterCopy } from '../../assets/copy/Login'; 

class Login extends Component {
    render() {
        return (
            <div className={styles.Login}>
                <div className={styles.Content}>
                    <div className={styles.Image}>
                      <img src={logo} alt="Fling" />
                    </div>
                    <LoginNav 
                        path={this.props.location.pathname} 
                    />
                    <LoginFooter
                        links={[LoginFooterCopy.link1,LoginFooterCopy.link2]}
                    />
                </div>
            </div>
        )
    }
}

export default Login;