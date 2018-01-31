import React from 'react';
import ReactDOM from 'react-dom';
import NavBanner from './NavBanner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBanner/>, div);
});
