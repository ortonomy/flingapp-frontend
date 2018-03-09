import React from 'react';
import FormFeedback from '../FormFeedback';

it('renders without crashing', () => {
  const wrapper = shallow(<FormFeedback />);
  expect(wrapper).toMatchSnapshot();
});
