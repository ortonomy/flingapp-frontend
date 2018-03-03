import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { NavBanner } from './NavBanner';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<NavBanner />);
  expect(wrapper).toBeDefined();
});
