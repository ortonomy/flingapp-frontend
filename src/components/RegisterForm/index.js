// react
import React, { Component } from 'react';

// library dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// component dependencies
import FormInputAnimated from '../FormInputAnimated/FormInputAnimated';
import FormButton from '../FormButton';
import ErrorMessage from '../ErrorMessage';

// actions
import { actions } from '../../containers/Login/actions';

//Debug
import Debug from '../../utils/Debug';

// styles
import styles from './style.module.css';

@connect(
  state => (
    {
      Login: state.Login
    }
  ),
  dispatch => (
    {
      setErrors: bindActionCreators(actions.setErrors, dispatch)
    }
  )
)
class RegisterForm extends Component {
  constructor (props) {
    super(props);

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submit = this.submit.bind(this);
    this.validityCheck = this.validityCheck.bind(this);
    this.keyPress = this.keyPress.bind(this);

    this.state = {
      type: 'REGISTERFORM',
      validFirstName: false,
      validLastName: false,
      validEmail: false,
      validPassword: false,
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    Debug.log('[componentDidMount] of <RegisterForm>: ', this.props);
    this.props.setErrors({lastRegisterError: null});
  }

  handleFirstName (value, validity) {
    this.setState ( (pS) => {
      return {
        validFirstName: validity,
        firstName: value
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

  submit(e) {
    this.validityCheck();
    if ( this.state.validFirstName && this.state.validLastName && this.state.validEmail && this.state.validPassword ) {
      this.props.submit(this.state);
    }
  }

  keyPress({key}) {
    if ( key === 'Enter' ) {
      this.submit();
    }
  }

  validityCheck() {
    Debug.log('[validityCheck] of <RegisterForm>: ', this.state);
    const nulled = [ this.state.firstName, this.state.lastName, this.state.email, this.state.password].some( el => {
      if ( el ) {
        return false;
      }
      return true;
    });
    if ( nulled ) {
      this.props.setErrors({lastRegisterError: 'Resolve errors to enable submit. E.g. empty fields'});
    } else {
      this.props.setErrors({lastRegisterError: null});
    }
  }

  render() {
    const f= (
      <form onKeyDown={this.keyPress} className={styles.RegisterForm}>
        <FormInputAnimated passValue={this.handleFirstName} name="firstName" text="First name" type="text" />
        <FormInputAnimated passValue={this.handleLastName} name="lastName" text="Last name" type="text" />
        <FormInputAnimated passValue={this.handleEmail} name="email" text="Email" type="email" />
        <FormInputAnimated passValue={this.handlePassword} name="password" text="Password" type="password" />
        <div className={styles.ErrorBox}>
          { this.props.Login.lastRegisterError && ( <ErrorMessage messages={[this.props.Login.lastRegisterError]} />)}
        </div>
        <FormButton submit={this.submit} disabled={!this.state.validFirstName || !this.state.validLastName || !this.state.validEmail || !this.state.validPassword} text="REGISTER" icon="fa-rocket" /> 
      </form>
    );
    return f;
  }
}

export default RegisterForm;