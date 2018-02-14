// action type constants
export const ORG_SEARCH = 'ORG_SEARCH';
export const ORG_SEARCH_SUCCESS = 'ORG_SEARCH_SUCCESS';
export const ORG_SEARCH_FAIL = 'ORG_SEARCH_FAIL';
export const SET_ERRORS = 'SET_ERRORS';
export const ORG_CREATE = 'ORG_CREATE';
export const ORG_CREATE_SUCCESS = 'ORG_CREATE_SUCCESS';
export const ORG_CREATE_FAIL = 'ORG_CREATE_FAIL';


// all action types
export const actionTypes = {
  ORG_SEARCH,
  ORG_SEARCH_SUCCESS,
  ORG_SEARCH_FAIL,
  ORG_CREATE,
  ORG_CREATE_SUCCESS,
  ORG_CREATE_FAIL,
  SET_ERRORS
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

export const setErrors = errorObj => (
  {
    type: SET_ERRORS,
    payload: errorObj
  }
);

// all action creators
export const actions = {
  orgSearch,
  orgSearchSuccess,
  orgSearchFail,
  orgCreate,
  orgCreateSuccess,
  orgCreateFail,
  setErrors
}