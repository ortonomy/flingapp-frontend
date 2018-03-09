import React from 'react';
import Sidebar from '../Sidebar';

it('renders without crashing', () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper).toMatchSnapshot();
});
