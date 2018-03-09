import React from 'react';
import Avatar from '../Avatar';

const user = {
  userFirstName: "example",
  userLastName: "user",
  userEmail: "example@test.com"
}

it('renders without crashing', () => {
  const wrapper = shallow(<Avatar user={user} />);
  expect(wrapper).toMatchSnapshot();
});
