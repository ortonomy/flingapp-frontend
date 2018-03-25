import React from 'react';
import Login from './component';

// Actions
import { actions, actionTypes } from './actions';

// Reducers
import reducer from './reducer';

// Dummy data
const user = {
  email: "example@example.com",
  password: "12345678",
  userEmailConfirmed: true
}

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o"

const error = new Error("An error occurred.")

// Test component rendering
it('renders without crashing', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

// Test actions
describe('login actions', () => {
  it ('should process LOGIN', () => {
    const expectedAction = {
      type: actionTypes.LOGIN,
      payload: user
    }
    expect(actions.login(user)).toEqual(expectedAction);
  })
  it ('should process LOGIN_SUCCESS', () => {

    const expectedAction = {
      type: actionTypes.LOGIN_SUCCESS,
      payload: jwt
    }
    expect(actions.loginSuccess(jwt)).toEqual(expectedAction);
  })
  it ('should process LOGIN_FAIL', () => {
    const expectedAction = {
      type: actionTypes.LOGIN_FAIL,
      payload: error,
      error: true
    }
    expect(actions.loginFail(error)).toEqual(expectedAction);
  })
  it ('should process REGISTER', () => {

    const expectedAction = {
      type: actionTypes.REGISTER,
      payload: user
    }
    expect(actions.register(user)).toEqual(expectedAction);
  })
  it ('should process REGISTER_SUCCESS', () => {
    const result = {}
    const expectedAction = {
      type: actionTypes.REGISTER_SUCCESS,
      payload: result
    }
    expect(actions.registerSuccess(result)).toEqual(expectedAction);
  })
  it ('should process REGISTER_FAIL', () => {
    const expectedAction = {
      type: actionTypes.REGISTER_FAIL,
      payload: error,
      error: true
    }
    expect(actions.registerFail(error)).toEqual(expectedAction);
  })
  it ('should process ACTIVATE', () => {
    const code = 'code-string'
    const expectedAction = {
      type: actionTypes.ACTIVATE,
      payload: code
    }
    expect(actions.activate(code)).toEqual(expectedAction);
  })
  it ('should process ACTIVATE_SUCCESS', () => {

    const expectedAction = {
      type: actionTypes.ACTIVATE_SUCCESS,
      payload: user
    }
    expect(actions.activateSuccess(user)).toEqual(expectedAction);
  })
  it ('should process ACTIVATE_FAIL', () => {
    const expectedAction = {
      type: actionTypes.ACTIVATE_FAIL,
      payload: error,
      error: true
    }
    expect(actions.activateFail(error)).toEqual(expectedAction);
  })
  it ('should process THIS_USER_UPDATE_SUCCESS', () => {
    const expectedAction = {
      type: actionTypes.THIS_USER_UPDATE_SUCCESS,
      payload: user
    }
    expect(actions.thisUserUpdateSuccess(user)).toEqual(expectedAction);
  })
  it ('should process THIS_USER_UPDATE_FAIL', () => {
    const expectedAction = {
      type: actionTypes.THIS_USER_UPDATE_FAIL,
      payload: error,
      error: true
    }
    expect(actions.thisUserUpdateFail(error)).toEqual(expectedAction);
  })
  it ('should process SET_ERRORS', () => {
    const expectedAction = {
      type: actionTypes.SET_ERRORS,
      payload: error,
    }
    expect(actions.setErrors(error)).toEqual(expectedAction);
  })
})


// Test reducers
describe('Login reducer', () => {
  it('should return the initial state', () => {

  })
  it('should handle the LOGIN action', () => {
    expect(reducer({}, {
      type: actionTypes.LOGIN,
      id: user
    })).toEqual(
      {
        loggingIn: true,
        loggedIn: false
      }
    )
  })
  it('should handle the LOGIN_SUCCESS action', () => {
    expect(reducer({}, {
      type: actionTypes.LOGIN_SUCCESS,
      payload: jwt
    })).toEqual(
      {
        jwt: jwt,
        loggingIn: false,
        loggedIn: true,
        lastLoginError: null
      }
    )
  })
  it('should handle the LOGIN_FAIL action', () => {
    expect(reducer({}, {
      type: actionTypes.LOGIN_FAIL,
      payload: error
    })).toEqual(
      {
        loggingIn: false,
        loggedIn: false,
        lastLoginError: error
      }
    )
  })
  it('should handle the REGISTER action', () => {
    expect(reducer({}, {
      type: actionTypes.REGISTER,
      payload: user
    })).toEqual(
      {
        registering: true
      }
    )
  })
  it('should handle the REGISTER_SUCCESS action', () => {
    expect(reducer({}, {
      type: actionTypes.REGISTER_SUCCESS,
      payload: {}
    })).toEqual(
      {
        registering: false
      }
    )
  })
  it('should handle the REGISTER_FAIL action', () => {
    expect(reducer({}, {
      type: actionTypes.REGISTER_FAIL,
      payload: error
    })).toEqual(
      {
        registering: false,
        lastRegisterError: error
      }
    )
  })
  it('should handle the ACTIVATE action', () => {
    expect(reducer({}, {
      type: actionTypes.ACTIVATE,
      payload: 'some-string'
    })).toEqual(
      {
        activating: true
      }
    )
  })
  it('should handle the ACIVATE_SUCCESS action', () => {
    expect(reducer({}, {
      type: actionTypes.ACTIVATE_SUCCESS,
      payload: jwt
    })).toEqual(
      {
        activating: false,
        activated: true,
        jwt: jwt
      }
    )
  })
  it('should handle the ACTIVATE_FAIL action', () => {
    expect(reducer({}, {
      type: actionTypes.ACTIVATE_FAIL,
      payload: error
    })).toEqual(
      {
        activating: false,
        lastActivationError: error
      }
    )
  })
  it('should handle the THIS_USER_UPDATE action', () => {
    expect(reducer({}, {
      type: actionTypes.THIS_USER_UPDATE,
      payload: error
    })).toEqual(
      {
        findingUser: true
      }
    )
  })
  it('should handle the THIS_USER_UPDATE_SUCCESS action', () => {
    expect(reducer({}, {
      type: actionTypes.THIS_USER_UPDATE_SUCCESS,
      payload: user
    })).toEqual(
      {
        findingUser: false,
        activated: user.userEmailConfirmed,
        user: {
          ...user
        }
      }
    )
  })
  it('should handle the THIS_USER_UPDATE_FAIL action', () => {
    expect(reducer({}, {
      type: actionTypes.THIS_USER_UPDATE_FAIL,
      payload: error
    })).toEqual(
      {
        findingUser: false,
        lastUserError: error
      }
    )
  })
  it('should handle the LOGOUT action', () => {
    expect(reducer({}, {
      type: actionTypes.LOGOUT
    })).toEqual(
      {
        loggedIn: false
      }
    )
  })
  it('should handle the SET_ERRORS action', () => {
    expect(reducer({}, {
      type: actionTypes.SET_ERRORS,
      payload: error
    })).toEqual(
      {
        ...error
      }
    )
  })
})
