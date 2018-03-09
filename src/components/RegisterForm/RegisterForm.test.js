import React from 'react';
import RegisterForm from '../RegisterForm';
import configureStore from 'redux-mock-store'

const initialState = { lastRegisterError: null };

const mockStore = configureStore();
let store;

beforeEach(() => {
  store = mockStore(initialState)
 })


it('renders without crashing', () => {
  const wrapper = shallow(<RegisterForm store={store} />);
  expect(wrapper).toMatchSnapshot();
});
