import React from 'react';
import FreelancerBanner from '../FreelancerBanner';


it('renders without crashing', () => {
  const wrapper = shallow(<FreelancerBanner />);
  expect(wrapper).toMatchSnapshot();
});
