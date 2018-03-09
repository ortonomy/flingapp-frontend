import React from 'react';
import LandingNav from './LandingNav';

it('renders without crashing', () => {
  const wrapper = shallow(<LandingNav />);
  expect(wrapper).toMatchSnapshot();
});
