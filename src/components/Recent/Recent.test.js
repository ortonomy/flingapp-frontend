import React from 'react';
import Recent from '../Recent';


it('renders without crashing', () => {
  const wrapper = shallow(<Recent />);
  expect(wrapper).toMatchSnapshot();
});
