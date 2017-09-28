import React, { Component } from 'react';
import FormInputAnimated from '../FormInputAnimated/FormInputAnimated';
import './LoginForm.css';


class LoginForm extends Component {
    handleChange() {
        return 0;
    }

    render() {
        return (
            <form className="LoginForm">
              <FormInputAnimated name="email" text="Email" />
              <FormInputAnimated name="password" text="Password" />
              <a className="form-link">I've forgotten my password.</a>
              <div className="form-element btn-primary">LOGIN</div>
            </form>
        )
    }
}

export default LoginForm;
