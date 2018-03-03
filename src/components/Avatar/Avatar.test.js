import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';

const user = {
  userFirstName: "example",
  userLastName: "user",
  userEmail: "example@test.com"

}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Avatar user={user} />, div);
});
