// react
import React, { Component } from 'react';

// library dependencies
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as qs from 'query-string';

// component dependencies
import withLogin from '../Auth/withLogin';
import withActivation from '../Auth/withActivation';
import withOrg from '../Auth/withOrg';
import Loader from '../../components/Loader';
import LoginFooter from '../../components/LoginFooter';
import Debug from '../../utils/Debug';
import ErrorMessage from '../../components/ErrorMessage';
import FormText from '../../components/FormText';
import EnrollmentForms from '../../components/EnrollmentForms';

// actions
import { actions } from '../OrgEnrolment/actions';

// copy and assets
import logo from '../../assets/images/full_title_compact_trans@svg.svg';
import { LoginFooter as LoginFooterCopy } from '../../assets/copy/Login'; 

// styles
import styles from './style.module.css';

// in component copy 
const nocode = `This page requires a code to validate organization access requests.`;
const instructions = `If you've received a validation email, click the link there to proceed.`;
const validating = `Trying to validate the access request`;
const validationSuccess = `Successfully validated your contact\'s organization request.`;
const successButton = `GO TO APP`;


@connect(
  state => (
    {
      Org: state.Org 
    }
  ),
  dispatch => (
    {
      tryValidation: bindActionCreators(actions.validateUserOrgAccess, dispatch)
    }
  )
)
class ValidateOrg extends Component {
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
    this.goToApp = this.goToApp.bind(this);
  }

  componentDidMount() {
    Debug.log('[componentDidMount] <ValidateOrg />: ', this.props);
    if ( this.props.location.search ) {
      const searchParams = qs.parse(this.props.location.search);
      if ( searchParams.code ) {
        const twoPartCode = searchParams.code.split('.');
        if ( twoPartCode.length === 2 ) {
          // need to add validation of code here to make sure no illegal characters
          this.props.tryValidation(
            {
              selector: twoPartCode[0],
              verifier: twoPartCode[1]
            }
          );
        }
      }
    }
  }

  goToApp() {
    this.props.history.push('/main');
  }

  getContent(step) {
    const homeLink = (<Link to='/'>Back to home</Link>);
    switch(step) {
      case 1: {
        return (
          [
            <FormText key="info" text={nocode} />,
            <FormText key="instruct" text={instructions} />
          ]
        )
      }
      case 2: {
        return (
          [
            <Loader key="loader" />,
            <FormText key="info" text={validating} />
          ]
        )
      }
      case 3: {
        return (
          [
            <FormText key="info" text={validationSuccess} />,
            <EnrollmentForms key="button" submit={this.goToApp} buttonOnly={true} buttonText={successButton} icon={'fa-question-rocket'} />
          ]
        )
      }
      case 4: {
        return (
          <ErrorMessage messages={[this.props.Org.validation.lastValidationError, ' ', homeLink]} />
        )
      }
      default: {
        return (
          <Loader />
        )
      }
    }
  }

  render() {
    const { Org } = this.props;
    let step = null;
    step = !Org.validation.validating && !Org.validation.validated && !Org.validation.lastValidationError ? 1 : Org.validation.validating && !Org.validation.validated ? 2 : !Org.validation.validating && Org.validation.validated ? 3 : !Org.validation.validating && !Org.validation.validated && Org.validation.lastValidationError ? 4 : null; 
    return (
      <div className={styles.Body}>
        <div className={styles.Content}>
          <div className={styles.Image}>
            <Link to="/"><img src={logo} alt="Fling" /></Link>
          </div>
          <div className={styles.Components} >
            { this.getContent(step) }
          </div>
          <LoginFooter
          links={[LoginFooterCopy.link1,LoginFooterCopy.link2]}
          />
        </div>
      </div>
    )
  }
}

export default withLogin(withActivation(withOrg(withRouter(ValidateOrg))));