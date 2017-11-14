import React, { Component } from 'react';
import FormInputAnimated from '../FormInputAnimated/FormInputAnimated';
import Feedback from '../Feedback/Feedback';
import form from './LoginForm.module.css';


class LoginForm extends Component {
    handleChange() {
        return 0;
    }

    render() {
        return (
            <form className={form.LoginForm}>
              <FormInputAnimated name="email" text="Email" />
              <Feedback message=""/>
              <FormInputAnimated name="password" text="Password" />
              <Feedback message=""/>
              <a className={form.link}>I've forgotten my password.</a>
              <div className={form.element}>LOGIN</div>
            </form>
        )
    }
}

export default LoginForm;
