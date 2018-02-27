// author: @ortonomy, Feb 2018 v1

// react
import React, { Component } from 'react';

//library dependencies
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// component dependencies 
import hasOrgRedirect from '../Auth/hasOrgRedirect';
import EnrollmentForms from '../../components/EnrollmentForms';
import FormText from '../../components/FormText';
import Loader from '../../components/Loader';
import LoginFooter from '../../components/LoginFooter';

//actions
import { actions } from './actions';

// styles
import styles from './style.module.css';

// copy and assets
import logo from '../../assets/images/full_title_compact_trans@svg.svg';
import { LoginFooter as LoginFooterCopy } from '../../assets/copy/Login'; 

// in-component copy
const instructionText = `Find or create an organization.`;
const foundText = `Okay. This organization already exists.`;
const makeRequestText = `The organization admin needs to approve you membership.`;
const requestButtonText = `REQUEST ACCESS`;
const createNewText = `Okay. We'll create a new organization called:`;
const createNewButtonText = `CREATE ORGANIZATION`;
const backText = (<Link to='/enroll'>or search again</Link>);
const confirmCreateText = `Nice job. You're now the owner of:  `;
const createdButtonText = `GO TO APP`;
const accessRequestedInfo = `You've successfully requested access to an organization.`;
const accessRequestedInstruction = `If your administrator has not responded, you can send another request:`;
const accessRequestButtonText = `REQUEST AGAIN`;
const rerequestSent = `Rerequest sent.`;

@connect(
  state => (
    {
      Login: state.Login,
      Org: state.Org 
    }
  ),
  dispatch => (
    {
      orgSearch: bindActionCreators(actions.orgSearch, dispatch),
      orgCreate: bindActionCreators(actions.orgCreate, dispatch),
      orgRequestAccess: bindActionCreators(actions.orgRequestAccess, dispatch),
      orgSearchReset: bindActionCreators(actions.resetOrgSearch, dispatch)
    }
  )
)
class OrgEnrolment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rerequest: false
    };

    this.findOrg = this.findOrg.bind(this);
    this.getFlowItem = this.getFlowItem.bind(this);
    this.requestOrgAccess = this.requestOrgAccess.bind(this);
    this.createNewOrg = this.createNewOrg.bind(this);
    this.confirmCreation = this.confirmCreation.bind(this);
    this.resetOrgSearch = this.resetOrgSearch.bind(this);
    this.rerequestAccess = this.rerequestAccess.bind(this);
  }

  findOrg(state) {
    if ( state.type === 'ENROLLMENTFORM' && state.validOrgName ) {
      this.props.orgSearch(state.orgName);
    }
  }

  requestOrgAccess() {
    this.props.orgRequestAccess(
      {
        org: this.props.Org.enrolment.currentOrg.orgId, 
        requestor: this.props.Login.user.userAccId
      }
    );
  }

  createNewOrg() {
    this.props.orgCreate(this.props.Org.searchTerm);
  }

  confirmCreation() {
    this.props.history.push('/main');
  }

  resetOrgSearch() {
    this.props.orgSearchReset();
  }

  rerequestAccess() {
    this.setState({rerequest: true});
    this.requestOrgAccess();
  }

  getFlowItem(step) {
    const { Org } = this.props; // get state object
    switch(step) {
      case 1: {
        return (
          [
            <FormText key="text" text={instructionText} />, 
            <EnrollmentForms key="form" submit={this.findOrg} /> 
          ]
        );
      }
      case 2: {
        return (
          [
            <FormText key="greeting" text={foundText} />,
            <FormText key="org" text={Org.enrolment.currentOrg.orgName} />,
            <FormText key="condition" text={makeRequestText} />,
            <EnrollmentForms key="button" submit={this.requestOrgAccess} buttonOnly={true} buttonText={requestButtonText} icon={'fa-question-circle'} />,
            <FormText handleClick={this.resetOrgSearch} key="backLink" text={backText} />
          ]
        );
      }
      case 3: {
        return (
          [
            <FormText key="text" text={createNewText} />,
            <FormText key="org" text={Org.enrolment.searchTerm} />,
            <EnrollmentForms key="button" submit={this.createNewOrg} buttonOnly={true} buttonText={createNewButtonText} icon={'fa-plus-circle'} />,
            <FormText handleClick={this.resetOrgSearch} key="backLink" text={backText} />
          ]
        )
      }
      case 4: {
        return (
          [
            <FormText key="cofirmation" text={confirmCreateText} />,
            <FormText key="org" text={Org.enrolment.searchTerm} />,
            <EnrollmentForms key="button" submit={this.confirmCreation} buttonOnly={true} buttonText={createdButtonText} icon={'fa-rocket'} />
          ]
        )
      }
      case 5: {
        return (
          [
            <FormText key="cofirmation" text={accessRequestedInfo} />,
            <FormText key="org" text={accessRequestedInstruction} />,
            <FormText key="info" text={this.state.rerequest ? rerequestSent : null} />,
            <EnrollmentForms key="button" submit={this.rerequestAccess} buttonOnly={true} buttonText={accessRequestButtonText} icon={'fa-question-circle'} />
          ]
        )
      }
      default: {
        return (
          <Loader />
        );
      }
    }
  }

  render() {
    
    const { Org } = this.props; // get state object
    // generate step number
    let step = Org.enrolment.searching ? null : !Org.enrolment.searched && !Org.enrolment.accessRequested ? 1 : Org.enrolment.searched && Org.enrolment.currentOrg && !Org.enrolment.created && !Org.enrolment.accessRequested ? 2 : Org.enrolment.searched && !Org.enrolment.currentOrg ? 3 : Org.enrolment.created ? 4 : Org.enrolment.accessRequested ? 5 : null;
    return (
      <div className={styles.Body}>
        <div className={styles.Content}>
          <div className={styles.Image}>
            <Link to="/"><img src={logo} alt="Fling" /></Link>
          </div>
          <div className={styles.Components} >
            { this.getFlowItem(step) }
          </div>
          <LoginFooter
          links={[LoginFooterCopy.link1,LoginFooterCopy.link2]}
          />
        </div>
      </div>
    );
  }
}

export default hasOrgRedirect(withRouter(OrgEnrolment));