import React from 'react';
import LandingNavItems from './LandingNavItems';

it('renders without crashing', () => {
  const wrapper = shallow(<LandingNavItems />);
  expect(wrapper).toMatchSnapshot();
});
