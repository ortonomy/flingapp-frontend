import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import FreelancerBody from '../FreelancerBody';

Enzyme.configure({ adapter: new Adapter() });

const freelancer = {
  flFirstName: 'example',
  flLastName: 'freelancer'
}

it('renders without crashing', () => {
  const wrapper = shallow(<FreelancerBody freelancer={freelancer} />);
  expect(wrapper).toBeDefined();
});
