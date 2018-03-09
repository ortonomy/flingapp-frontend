import React from 'react';
import LoginNav from '../LoginNav';

it('renders without crashing', () => {
  const wrapper = shallow(<LoginNav />);
  expect(wrapper).toMatchSnapshot();
});
