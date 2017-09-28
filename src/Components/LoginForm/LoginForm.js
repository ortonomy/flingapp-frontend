import React, { Component } from 'react';
import FormInputAnimated from '../FormInputAnimated/FormInputAnimated';
import Feedback from '../Feedback/Feedback';
import './LoginForm.css';


class LoginForm extends Component {
    handleChange() {
        return 0;
    }

    render() {
        return (
            <form className="LoginForm">
              <FormInputAnimated name="email" text="Email" />
              <Feedback message="Invalid email address"/>
              <FormInputAnimated name="password" text="Password" />
              <Feedback message="Did you forget your email address? "/>
              <a className="form-link">I've forgotten my password.</a>
              <div className="form-element btn-primary">LOGIN</div>
            </form>
        )
    }
}

export default LoginForm;
