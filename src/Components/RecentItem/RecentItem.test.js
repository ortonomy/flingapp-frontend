import React from 'react';
import ReactDOM from 'react-dom';
import RecentItem from './RecentItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecentItem/>, div);
});
