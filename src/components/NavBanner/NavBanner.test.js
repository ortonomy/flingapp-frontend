import React from 'react';
import NavBanner from '../NavBanner';

it('renders without crashing', () => {
  const wrapper = shallow(<NavBanner />);
  expect(wrapper).toMatchSnapshot();
});
