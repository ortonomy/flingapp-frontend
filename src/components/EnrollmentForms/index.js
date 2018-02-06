// author: @ortonomy, Feb 2018

// react
import React, { Component } from 'react';

// library dependencies
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

// component dependencies
import FormInputAnimated from '../FormInputAnimated/FormInputAnimated';
import FormButton from '../FormButton';
import ErrorMessage from '../ErrorMessage';

// styles
//import styles from './EnrollmentForms.module.css';

//debug
import Debug from '../../utils/Debug';

@connect(
  null,
  null
)
class EnrollmentForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      type: 'ENROLLMENTFORM',
      validOrgName: false,
      orgName: ''
    }

    this.handleOrgName = this.handleOrgName.bind(this);
    this.submit = this.submit.bind(this);
    this.validityCheck = this.validityCheck.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidMount() {
    Debug.log('[componentDidMount] of <LoginForm>: ', this.props);
    //this.props.setErrors({lastEnrollmentError: null});
  }

  handleOrgName (value, validity) {
    this.setState ( (pS) => {
      return {
        validOrgName: validity,
        orgName: value
      }
    });
  }

  submit() {
    this.validityCheck();
    if ( this.state.validOrgName ) {
      this.props.submit(this.state);
    }
  }

  keyPress({key}) {
    if ( key === 'Enter' ) {
      this.submit();
    }
  }

  validityCheck() {
    Debug.log('[validityCheck] of <EnrollmentForm>: ', this.state);
    const nulled = [this.state.email, this.state.password].some( el => {
      if ( el ) {
        return false;
      }
      return true;
    });
    if ( nulled ) {
      this.props.setErrors({lastEnrollmentError: 'Resolve errors to enable submit. E.g. empty fields'});
    } else {
      this.props.setErrors({lastEnrollmentError: null});
    }
  }

  render() {
    Debug.log('[render] of <EnrollmentForm>: ', this.props);
    const f = (
      <form>
        <FormInputAnimated passValue={this.handleOrgName} name="orgname" text="Organization name" type="text" />
        <div>
          { 
            // this.props.Org.lastEnrollmentError && ( <ErrorMessage messages={[this.props.Org.lastEnrollmentError]} />)
          }
        </div>
        <FormButton submit={this.submit} disabled={!this.state.validOrgName} text="JOIN ORGANIZATION" icon="fa-user-plus" />
      </form>
    );
    return f;
  }
}

export default EnrollmentForm;