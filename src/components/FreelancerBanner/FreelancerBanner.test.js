import React from 'react';
import ReactDOM from 'react-dom';
import FreelancerBanner from './FreelancerBanner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FreelancerBanner/>, div);
});
