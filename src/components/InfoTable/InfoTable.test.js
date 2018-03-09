import React from 'react';
import InfoTable from '../InfoTable';

it('renders without crashing', () => {
  const wrapper = shallow(<InfoTable />);
  expect(wrapper).toMatchSnapshot();
});
