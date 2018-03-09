import React from 'react';
import RecentItem from '../RecentItem';

it('renders without crashing', () => {
  const wrapper = shallow(<RecentItem />);
  expect(wrapper).toMatchSnapshot();
});
