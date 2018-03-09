import React from 'react';
import Loader from '../Loader';

it('renders without crashing', () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper).toMatchSnapshot();
});
