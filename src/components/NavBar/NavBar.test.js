import React from 'react';
import NavBar from '../NavBar';

it('renders without crashing', () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper).toMatchSnapshot();
});
