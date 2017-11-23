// action type constants
export const APP_RESET_STATE = 'APP_RESET_STATE';
export const APP_UPDATE = 'APP_UPDATE';
export const APP_UPDATE_SUCCESS = 'APP_UPDATE_SUCCESS';
export const APP_UPDATE_FAIL = 'APP_UPDATE_FAIL';

// all action types
export const actionTypes = {
  APP_RESET_STATE,
  APP_UPDATE,
  APP_UPDATE_SUCCESS,
  APP_UPDATE_FAIL
};

// action creators
export const appUpdate = value => ({
  type: APP_UPDATE, 
  payload: value 
});

export const appUpdateSuccess = result => ({
  type: APP_UPDATE_SUCCESS, 
  payload: result
});

export const appUpdateFail = err => ({
  type: APP_UPDATE_FAIL, 
  payload: err, 
  error: true
});

// all action creators
export const actions = {
  appUpdate,
  appUpdateSuccess,
  appUpdateFail
}

