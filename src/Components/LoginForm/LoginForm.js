// react
import React, { Component } from 'react';

// library components
import { Link } from 'react-router-dom';

// dependent components
import FormInputAnimated from '../FormInputAnimated/FormInputAnimated';
import FormButton from '../FormButton';

// styles
import form from './LoginForm.module.css';


class LoginForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      validEmail: false,
      validPassword: false,
      email: '',
      password: ''
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleEmail (value, validity) {
    this.setState ( (pS) => {
      return {
        validEmail: validity,
        email: value
      }
    });
  }

  handlePassword (value, validity) {
    this.setState ( (pS) => {
      return {
        validPassword: validity,
        password: value
      }
    });
  }

  submit() {
    console.log('Submitting... ', this.state.email, ' ', this.state.password);
  }

  render() {
    return (
      <form className={form.LoginForm}>
        <FormInputAnimated passValue={this.handleEmail} name="email" text="Email" type="email" />
        <FormInputAnimated passValue={this.handlePassword} name="password" text="Password" type="password" />
        <div className={form.Forgot}>
          <Link to="/forgot" ><span>I've forgotten my password.</span></Link>
        </div>
        <FormButton submit={this.submit} disabled={!this.state.validEmail || !this.state.validPassword} text="LOGIN" icon="fa-sign-in" />
      </form>
    )
  }
}

export default LoginForm;
