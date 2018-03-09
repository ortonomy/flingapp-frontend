import React from 'react';
import LandingHero from './LandingHero';

it('renders without crashing', () => {
  const wrapper = shallow(<LandingHero />);
  expect(wrapper).toMatchSnapshot();
});
