import React from 'react';
import LandingButton from './LandingButton';

it('renders without crashing', () => {
  const wrapper = shallow(<LandingButton />);
  expect(wrapper).toMatchSnapshot();
});
