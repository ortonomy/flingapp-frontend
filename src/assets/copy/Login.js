import React from 'react';

export const LoginFooter = {
    link1: {
      text: 'Terms & conditions',
      route: '/terms'
    },
    link2: {
      text: 'Privacy policy',
      route: '/privacy'
    }
};

export const ActivationRequest = () => (
  <div>
    <p>You've successfully registered and logged in with <strong>fling.work</strong>, but your account is not yet active.</p>
    <p>Follow the instructions we've sent to your registered email address in order to activate your account.</p>
  </div>
);