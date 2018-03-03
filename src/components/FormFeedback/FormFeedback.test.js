import React from 'react';
import ReactDOM from 'react-dom';
import FormFeedback from '../FormFeedback';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormFeedback/>, div);
});
