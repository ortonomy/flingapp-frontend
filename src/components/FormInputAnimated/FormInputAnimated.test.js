import React from 'react';
import ReactDOM from 'react-dom';
import FormInputAnimated from './FormInputAnimated';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormInputAnimated/>, div);
});
