// react
import React, { Component } from 'react';

// library dependencies
import { connect } from 'react-redux';

// component dependencies
import * as LandingStatic from '../../components/LandingStatic';
const { LandingNav, LandingHero } = LandingStatic;

@connect(
  state => (
    {
      Login: state.Login
    }
  ),
  null
)
class Landing extends Component {
  render () {
    return (
      <div>
        <LandingNav loggedIn={this.props.state.Login.loggedIn} />
        <LandingHero />
      </div>
    );
  }
}

export default Landing;
