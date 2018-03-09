import React from 'react';
import FreelancerInfo from '../FreelancerInfo';

const freelancer = {
  flFirstName: 'example',
  flLastName: 'freelancer'
}

it('renders without crashing', () => {
  const wrapper = shallow(<FreelancerInfo freelancer={freelancer} />);
  expect(wrapper).toMatchSnapshot();
});
