import React from 'react';
import ReactDOM from 'react-dom';
import FreelancerBody from './FreelancerBody';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FreelancerBody/>, div);
});
