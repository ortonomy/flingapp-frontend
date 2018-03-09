import React from 'react';
import NavMenu from '../NavMenu';

it('renders without crashing', () => {
  const wrapper = shallow(<NavMenu />);
  expect(wrapper).toMatchSnapshot();
});
