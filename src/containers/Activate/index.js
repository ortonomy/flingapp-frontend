// react
import React, { Component } from 'react';

// library dependencies
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as qs from 'query-string';

// component dependencies
import withLogin from '../Auth/withLogin';
import Loader from '../../components/Loader';
import LoginFooter from '../../components/LoginFooter';
import Debug from '../../utils/Debug';
import ErrorMessage from '../../components/ErrorMessage';

// actions
import { actions } from '../Login/actions';

// copy and assets
import logo from '../../assets/images/full_title_compact_trans@svg.svg';
import { LoginFooter as LoginFooterCopy } from '../../assets/copy/Login'; 

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
      tryActivation: bindActionCreators(actions.activate, dispatch)
    }
  ) 
)
class Activate extends Component {
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
  }

  componentDidMount() {
    Debug.log('Component did mount of <Activate>: ', this.props);
    if ( this.props.location.search ) {
      const searchParams = qs.parse(this.props.location.search);
      if ( searchParams.code ) {
        const twoPartCode = searchParams.code.split('.');
        if ( twoPartCode.length === 2 ) {
          this.props.tryActivation(
            {
              selector: twoPartCode[0],
              verifier: twoPartCode[1]
            }
          );
        }
      }
    }
  }

  getContent(Content) {
    return ( <div className={styles.Activate}>
      <div className={styles.Content}>
        <div className={styles.Image}>
          <Link to="/"><img src={logo} alt="Fling" /></Link>
        </div>
        <div className={styles.Body}>
            { Content }
        </div>
        <LoginFooter
            links={[LoginFooterCopy.link1,LoginFooterCopy.link2]}
        />
        </div>
      </div>
    );
  }

  render () {
    const { Login } = this.props;
    if ( Login.loggedIn && Login.activated ) {
      return this.getContent(
        (
          <div className={styles.ActivateContent}>
            <p className={styles.Element}>Thanks for activating. <Link to="/main">Click here to go to the app.</Link></p>
          </div>
        )
      );
    }
    if ( Login.loggedIn && Login.activating) {
      return this.getContent(
        (
          <div className={styles.ActivateContent}>
            <Loader />
            <p className={styles.Element}>Trying to activate your account now. </p>
          </div>
        )
      );
    }
    if ( Login.loggedIn && Login.lastActivationError && !Login.activated) {
      const homeLink = (<Link to='/'>Back to home</Link>);
      return this.getContent(
          (
            <div className={styles.ActivateContent}>
              <ErrorMessage messages={[Login.lastActivationError, ' ', homeLink]} />
            </div>
          )
        );
    }
    return this.getContent((<Loader />));
  }
};

export default withLogin(Activate);
