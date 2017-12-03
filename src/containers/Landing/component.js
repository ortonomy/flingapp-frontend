// basic react imports
import React, { Component } from 'react';

// user components
import * as LandingStatic from '../../components/LandingStatic';
console.log(LandingStatic);
const { LandingNav, LandingHero } = LandingStatic;

class Landing extends Component {
  render () {
    return (
      <div>
        <LandingNav />
        <LandingHero />
      </div>
    );
  }
}

export default Landing;