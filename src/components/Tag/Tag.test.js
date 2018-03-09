import React from 'react';
import Tag from '../Tag';

it('renders without crashing', () => {
  const wrapper = shallow(<Tag />);
  expect(wrapper).toMatchSnapshot();
});
