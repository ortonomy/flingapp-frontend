import React from 'react';
import Create from '../Create';

it('renders without crashing', () => {
  const wrapper = shallow(<Create />);
  expect(wrapper).toMatchSnapshot();
});
