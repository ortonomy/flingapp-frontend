import React from 'react';
import FormInputAnimated from '../FormInputAnimated';

it('renders without crashing', () => {
  const wrapper = shallow(<FormInputAnimated type="password" />);
  expect(wrapper).toMatchSnapshot();
});
