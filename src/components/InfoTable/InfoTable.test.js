import React from 'react';
import ReactDOM from 'react-dom';
import InfoTable from './InfoTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoTable/>, div);
});
