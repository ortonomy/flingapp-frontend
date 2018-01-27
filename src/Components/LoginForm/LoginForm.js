// react
import React, { Component } from 'react';

// library dependencies
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// component dependencies
import FormInputAnimated from '../FormInputAnimated/FormInputAnimated';
import FormButton from '../FormButton';
import ErrorMessage from '../ErrorMessage';

// actions
import { actions } from '../../containers/Login/actions';

// styles
import form from './LoginForm.module.css';

//debug
import Debug from '../../utils/Debug';

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
class LoginForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      type: 'LOGINFORM',
      validEmail: false,
      validPassword: false,
      email: '',
      password: ''
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submit = this.submit.bind(this);
    this.validityCheck = this.validityCheck.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidMount() {
    Debug.log('[componentDidMount] of <LoginForm>: ', this.props);
    this.props.setErrors({lastLoginError: null});
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
    this.validityCheck();
    if ( this.state.validEmail && this.state.validPassword ) {
      this.props.submit(this.state);
    }
  }

  keyPress({key}) {
    if ( key === 'Enter' ) {
      this.submit();
    }
  }

  validityCheck() {
    Debug.log('[validityCheck] of <LoginForm>: ', this.state);
    const nulled = [this.state.email, this.state.password].some( el => {
      if ( el ) {
        return false;
      }
      return true;
    });
    if ( nulled ) {
      this.props.setErrors({lastLoginError: 'Resolve errors to enable submit. E.g. empty fields'});
    } else {
      this.props.setErrors({lastLoginError: null});
    }
  }

  render() {
    Debug.log('[render] of <LoginForm>: ', this.props);
    const f = (
      <form className={form.LoginForm}>
        <FormInputAnimated passValue={this.handleEmail} name="email" text="Email" type="email" />
        <FormInputAnimated passValue={this.handlePassword} name="password" text="Password" type="password" />
        <div className={form.Forgot}>
          <Link to="/forgot" ><span>I've forgotten my password.</span></Link>
        </div>
        <div className={form.ErrorBox}>
          { this.props.Login.lastLoginError && ( <ErrorMessage messages={[this.props.Login.lastLoginError]} />)}
        </div>
        <FormButton submit={this.submit} disabled={!this.state.validEmail || !this.state.validPassword} text="LOGIN" icon="fa-sign-in" />
      </form>
    );
    return f;
  }
}

export default LoginForm;
