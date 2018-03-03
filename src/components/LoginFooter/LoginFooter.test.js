import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import LoginFooter from '../LoginFooter';

// Link information from /assets
import { LoginFooter as LoginFooterCopy } from '../../assets/copy/Login';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<LoginFooter links={[LoginFooterCopy.link1,LoginFooterCopy.link2]} />);
  expect(wrapper).toBeDefined();
});
