import React from 'react';
import ReactDOM from 'react-dom';
import Recent from './Recent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Recent/>, div);
});
