import React, { Component } from 'react';
import './LoginForm.css'

class LoginForm extends Component {
    render() {
        return(
            <div className="LoginForm">
                <div className="tabs">
                    <span className="active">Login</span>
                    <span>Register</span>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default LoginForm;
