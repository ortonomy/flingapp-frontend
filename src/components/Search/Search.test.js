import React from 'react';
import Search from '../Search';

it('renders without crashing', () => {
  const wrapper = shallow(<Search />);
  expect(wrapper).toMatchSnapshot();
});
