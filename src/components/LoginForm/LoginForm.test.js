import React from 'react';
import LoginForm from '../LoginForm';
import configureStore from 'redux-mock-store'
import ErrorMessage from '../ErrorMessage';
import { BrowserRouter } from 'react-router-dom';

const oneErrorState   = { Login: { lastLoginError: ['one error'] }};
const noErrorState    = { Login: { lastLoginError: null }}

const mockStore = configureStore();
let store;

it('renders without crashing', () => {
  store = mockStore(noErrorState)
  const wrapper = shallow(<LoginForm store={store} />);
  expect(wrapper).toMatchSnapshot();
});

it('does not render an error message if no error is given', () => {
  store = mockStore(noErrorState)
  const wrapper = mount(<BrowserRouter><LoginForm store={store} /></BrowserRouter>)
  expect(wrapper.find(ErrorMessage)).toHaveLength(0);
});

it('renders an error message if an error is returned from the store', () => {
  store = mockStore(oneErrorState)
  const wrapper = mount(<BrowserRouter><LoginForm store={store} /></BrowserRouter>);
  expect(wrapper.find(ErrorMessage)).toHaveLength(1);
});
