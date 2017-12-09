// react
import React, { Component } from 'react';

// dependent components
import FormInputAnimated from '../FormInputAnimated/FormInputAnimated';
import FormButton from '../FormButton';

// styles
import styles from './style.module.css';

class LoginForm extends Component {
  constructor (props) {
    super(props);

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      validFirstName: false,
      validLastName: false,
      validEmail: false,
      validPassword: false,
      fistName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  handleFirstName (value, validity) {
    this.setState ( (pS) => {
      return {
        validFirstName: validity,
        fistName: value
      }
    });
  }

  handleLastName (value, validity) {
    this.setState ( (pS) => {
      return {
        validLastName: validity,
        lastName: value
      }
    });
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
    console.log('Submitting... ');
  }

  render() {
    return (
      <form className={styles.RegisterForm}>
        <FormInputAnimated passValue={this.handleFirstName} name="firstName" text="First name" type="text" />
        <FormInputAnimated passValue={this.handleLastName} name="lastName" text="Last name" type="text" />
        <FormInputAnimated passValue={this.handleEmail} name="email" text="Email" type="email" />
        <FormInputAnimated passValue={this.handlePassword} name="password" text="Password" type="password" />
        <FormButton submit={this.submit} disabled={!this.state.validFirstName || !this.state.validLastName || !this.state.validEmail || !this.state.validPassword} text="REGISTER" icon="fa-rocket" /> 
      </form>
    )
  }
}

export default LoginForm;