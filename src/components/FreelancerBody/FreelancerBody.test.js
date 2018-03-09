import React from 'react';
import FreelancerBody from '../FreelancerBody';

const freelancer = {
  flFirstName: 'example',
  flLastName: 'freelancer'
}

it('renders without crashing', () => {
  const wrapper = shallow(<FreelancerBody freelancer={freelancer} />);
  expect(wrapper).toMatchSnapshot();
});
