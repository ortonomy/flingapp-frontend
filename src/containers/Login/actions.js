// action type constants
export const LOGIN = 'LOGIN';


// all action types
export const actionTypes = {
  LOGIN
};

// action creators
export const login = () => ({
  type: LOGIN
});

// export const appUpdate = value => ({
//   type: APP_UPDATE, 
//   payload: value 
// });

// export const appUpdateSuccess = result => ({
//   type: APP_UPDATE_SUCCESS, 
//   payload: result
// });

// export const appUpdateFail = err => ({
//   type: APP_UPDATE_FAIL, 
//   payload: err, 
//   error: true
// });

// all action creators
export const actions = {
  login
}

