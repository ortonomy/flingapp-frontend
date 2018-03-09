import React from 'react';
import LoginFooter from '../LoginFooter';

// Link information from /assets
import { LoginFooter as LoginFooterCopy } from '../../assets/copy/Login';

it('renders without crashing', () => {
  const wrapper = shallow(<LoginFooter links={[LoginFooterCopy.link1,LoginFooterCopy.link2]} />);
  expect(wrapper).toMatchSnapshot();
});
