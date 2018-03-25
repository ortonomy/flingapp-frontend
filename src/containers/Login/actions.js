// action type constants
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const ACTIVATE = 'ACTIVATE';
export const ACTIVATE_SUCCESS = 'ACTIVATE_SUCCESS';
export const ACTIVATE_FAIL = 'ACTIVATE_FAIL';
export const THIS_USER_UPDATE = 'THIS_USER_UPDATE';
export const THIS_USER_UPDATE_SUCCESS = 'THIS_USER_UPDATE_SUCCESS';
export const THIS_USER_UPDATE_FAIL = 'THIS_USER_UPDATE_FAIL';
export const SET_ERRORS = 'SET_ERRORS';
export const LOGOUT = 'LOGOUT';

// all action types
export const actionTypes = {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  ACTIVATE,
  ACTIVATE_SUCCESS,
  ACTIVATE_FAIL,
  THIS_USER_UPDATE,
  THIS_USER_UPDATE_SUCCESS,
  THIS_USER_UPDATE_FAIL,
  SET_ERRORS,
  LOGOUT
};

// action creators
export const login = user => (
  {
    type: LOGIN,
    payload: user
  }
);

export const loginSuccess = jwt => (
  {
    type: LOGIN_SUCCESS,
    payload: jwt
  }
);

export const loginFail = err => (
  {
    type: LOGIN_FAIL,
    payload: err,
    error: true
  }
);

export const register = user => (
  {
    type: REGISTER,
    payload: user
  }
)

export const registerSuccess = result => (
  {
    type: REGISTER_SUCCESS,
    payload: result
  }
)

export const registerFail = err => (
  {
    type: REGISTER_FAIL,
    payload: err,
    error: true
  }
);

export const activate = code => (
  {
    type: ACTIVATE,
    payload: code
  }
);

export const activateSuccess = user => (
  {
    type: ACTIVATE_SUCCESS,
    payload: user
  }
);

export const activateFail = err => (
  {
    type: ACTIVATE_FAIL,
    payload: err,
    error: true
  }
);

export const thisUserUpdate = () => (
  {
    type: THIS_USER_UPDATE
  }
);

export const thisUserUpdateSuccess = user => (
  {
    type: THIS_USER_UPDATE_SUCCESS,
    payload: user
  }
);

export const thisUserUpdateFail = err => (
  {
    type: THIS_USER_UPDATE_FAIL,
    payload: err,
    error: true
  }
);

export const setErrors = error => (
  {
    type: SET_ERRORS,
    payload: error
  }
);

export const logOut = () => (
  {
    type: LOGOUT
  }
)


// all action creators
export const actions = {
  login,
  loginSuccess,
  loginFail,
  register,
  registerSuccess,
  registerFail,
  activate,
  activateSuccess,
  activateFail,
  thisUserUpdate,
  thisUserUpdateSuccess,
  thisUserUpdateFail,
  setErrors,
  logOut
}
