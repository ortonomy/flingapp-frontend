// action type constants
export const ORG_SEARCH = 'ORG_SEARCH';
export const ORG_SEARCH_SUCCESS = 'ORG_SEARCH_SUCCESS';
export const ORG_SEARCH_FAIL = 'ORG_SEARCH_FAIL';
export const SET_ERRORS = 'SET_ERRORS';
export const ORG_CREATE = 'ORG_CREATE';
export const ORG_CREATE_SUCCESS = 'ORG_CREATE_SUCCESS';
export const ORG_CREATE_FAIL = 'ORG_CREATE_FAIL';
export const ORG_REQUEST_ACCESS = 'ORG_REQUEST_ACCESS';
export const ORG_REQUEST_ACCESS_SUCCESS = 'ORG_REQUEST_ACCESS_SUCCESS';
export const ORG_REQUEST_ACCESS_FAIL = 'ORG_REQUEST_ACCESS_FAIL';
export const RESET_ORG_SEARCH = 'RESET_ORG_SEARCH';
export const VALIDATE_USER_ORG_ACCESS = 'VALIDATE_USER_ORG_ACCESS';
export const VALIDATE_USER_ORG_ACCESS_SUCCESS = 'VALIDATE_USER_ORG_ACCESS_SUCCESS';
export const VALIDATE_USER_ORG_ACCESS_FAIL = 'VALIDATE_USER_ORG_ACCESS_FAIL';


// all action types
export const actionTypes = {
  ORG_SEARCH,
  ORG_SEARCH_SUCCESS,
  ORG_SEARCH_FAIL,
  ORG_CREATE,
  ORG_CREATE_SUCCESS,
  ORG_CREATE_FAIL,
  SET_ERRORS,
  ORG_REQUEST_ACCESS,
  ORG_REQUEST_ACCESS_SUCCESS,
  ORG_REQUEST_ACCESS_FAIL,
  RESET_ORG_SEARCH,
  VALIDATE_USER_ORG_ACCESS,
  VALIDATE_USER_ORG_ACCESS_SUCCESS,
  VALIDATE_USER_ORG_ACCESS_FAIL
}

// action creators
export const orgSearch = orgName => (
  {
    type: ORG_SEARCH,
    payload: orgName
  }
);

export const orgSearchSuccess = orgDetails => (
  {
    type: ORG_SEARCH_SUCCESS,
    payload: orgDetails
  }
);

export const orgSearchFail = err => (
  {
    type: ORG_SEARCH_FAIL,
    payload: err,
    error: true
  }
);

export const orgCreate = () => (
  {
    type: ORG_CREATE
  }
);

export const orgCreateSuccess = orgDetails => (
  {
    type: ORG_CREATE_SUCCESS,
    payload: orgDetails
  }
);

export const orgCreateFail = err => (
  {
    type: ORG_CREATE_FAIL,
    payload: err,
    error: true
  }
);

export const orgRequestAccess = org => (
  {
    type: ORG_REQUEST_ACCESS,
    payload: org
  }
);

export const orgRequestAccessSuccess = result => (
  {
    type: ORG_REQUEST_ACCESS_SUCCESS,
    payload: result
  }
);

export const orgRequestAccessFail = err => (
  {
    type: ORG_REQUEST_ACCESS_FAIL,
    payload: err,
    error: true
  }
);

export const setErrors = errorObj => (
  {
    type: SET_ERRORS,
    payload: errorObj
  }
);

export const resetOrgSearch = () => (
  {
    type: RESET_ORG_SEARCH
  }
)

export const validateUserOrgAccess = (codes) => (
  {
    type: VALIDATE_USER_ORG_ACCESS,
    payload: codes
  } 
)

export const validateUserOrgAccessSuccess = (result) => (
  {
    type: VALIDATE_USER_ORG_ACCESS_SUCCESS,
    payload: result
  } 
)

export const validateUserOrgAccessFail = (err) => (
  {
    type: VALIDATE_USER_ORG_ACCESS_FAIL,
    payload: err,
    error: true
  } 
)

// all action creators
export const actions = {
  orgSearch,
  orgSearchSuccess,
  orgSearchFail,
  orgCreate,
  orgCreateSuccess,
  orgCreateFail,
  setErrors,
  orgRequestAccess,
  orgRequestAccessSuccess,
  orgRequestAccessFail,
  resetOrgSearch,
  validateUserOrgAccess,
  validateUserOrgAccessSuccess,
  validateUserOrgAccessFail
}