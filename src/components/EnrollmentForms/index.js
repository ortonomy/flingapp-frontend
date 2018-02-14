// author: @ortonomy, Feb 2018

// react
import React, { Component } from 'react';

// library dependencies
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// component dependencies
import FormInputAnimated from '../FormInputAnimated/FormInputAnimated';
import FormButton from '../FormButton';
import ErrorMessage from '../ErrorMessage';

// actions
import { actions } from '../../containers/OrgEnrolment/actions';

// styles
import styles from './EnrollmentForms.module.css';

//debug
import Debug from '../../utils/Debug';

@connect(
  state => (
    {
      Org: state.Org
    }
  ),
  dispatch => (
    {
    setErrors: bindActionCreators(actions.setErrors, dispatch)
    }
  )
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
    Debug.log('[componentDidMount] of <EnrollmentForm>: ', this.props);
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
    const nulled = [this.state.orgName].some( el => {
      if ( el ) {
        return false;
      }
      return true;
    });
    if ( nulled ) {
      this.props.setErrors({lastOrgError: 'Resolve errors to enable submit. E.g. empty fields'});
    } else {
      this.props.setErrors({lastOrgError: null});
    }
  }

  render() {
    Debug.log('[render] of <EnrollmentForm>: ', this.props);
    let f;
    if ( !this.props.buttonOnly ) {
      f = (
        <form className={styles.Form}>
          <FormInputAnimated passValue={this.handleOrgName} name="orgname" text="Organization name" type="text" />
          <div className={styles.ErrorMessage}>
            { 
              this.props.Org.lastOrgError && ( <ErrorMessage messages={[this.props.Org.lastOrgError]} />)
            }
          </div>
          <FormButton submit={this.submit} disabled={!this.state.validOrgName} text="JOIN ORGANIZATION" icon="fa-user-plus" />
        </form>
      );
      return f;
    }

    return (
      <form className={styles.Form}>
        <div className={styles.ErrorMessage}>
            { 
              this.props.Org.lastOrgSearchError && ( <ErrorMessage messages={[this.props.Org.lastOrgSearchError]} />)
            }
        </div>
        <FormButton submit={this.props.submit} disabled={false} text={this.props.buttonText} icon={this.props.icon} />
      </form>
    );
  }
}

export default EnrollmentForm;