import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import FreelancerBanner from '../FreelancerBanner';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<FreelancerBanner />);
  expect(wrapper).toBeDefined();
});
