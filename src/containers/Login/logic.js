// library dependencies
import { createLogic } from 'redux-logic';
import { Cookies } from 'react-cookie';

// custom actions
import { actionTypes, actions } from './actions';

// custom utils
import API from '../../utils/Api';
import Debug from '../../utils/Debug';

export const registerLogic = createLogic(
  {
    type: actionTypes.REGISTER,
    /* let's prevent empty requests */
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'REGISTER' && action.payload ) {
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    },
    process: ({ action }, dispatch, done) => {
      API.Axios('POST', '/register', API.generateRegisterQuery(action.payload), null)
      .then ( data => {
        Debug.log('[action:process:remoteAPI:success] of REGISTER', data);
        dispatch(actions.registerSuccess({ data: data, login: { email: action.payload.email, password: action.payload.password }}));
      })
      .catch( error => {
        if ( /.?duplicate.?/.test(error) ) {
          dispatch(actions.registerFail('An account already exists with that email address.'));
          return;
        }
        dispatch(actions.registerFail(error));
      })
      .then ( () => {
        done();
      });
    }
  }
);

export const registerSuccessLogic = createLogic(
  {
    type: actionTypes.REGISTER_SUCCESS,
    /* let's prevent empty requests */
    validate: ({ action }, allow, reject) => {
      Debug.log('[action:validate:remoteAPI] of REGISTER_SUCCESS', action.payload);
      if ( action.type === 'REGISTER_SUCCESS' && action.payload ) {
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    },
    process: ({ action }, dispatch, done) => {
      dispatch(actions.login({email: action.payload.login.email, password: action.payload.login.password }));
      done();
    }
  }
);


export const loginLogic = createLogic(
  {
    type: actionTypes.LOGIN,
    /* let's prevent empty requests */
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'LOGIN' && action.payload) {
        Debug.log(['[action:validate:allow] LOGIN'], action.payload)
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    },
    process: ({ action }, dispatch, done) => {
      API.Axios('POST', '/graphql', API.generateLoginQuery(action.payload), null)
      .then ( data => {
        if ( data.authenticate && data.authenticate.hasOwnProperty('jwtToken') && data.authenticate.jwtToken !== null ) {
          Debug.log('[action:process:jwt] LOGIN', data.authenticate.jwtToken);
          dispatch(actions.loginSuccess(data.authenticate.jwtToken));
        } else {
          throw(new Error('Incorrect email or password'));
        }
      })
      .catch( error => {
        dispatch(actions.loginFail(error.message));
      })
      .then ( () => {
        done();
      });
    }
  }
);

export const loginSuccessLogic = createLogic(
  {
    type: actionTypes.LOGIN_SUCCESS,
    /* let's prevent empty requests */
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'LOGIN_SUCCESS' && action.payload) {
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    },
    process: ({ action }, dispatch, done) => {
      const c = new Cookies();
      Debug.log('[action:process:jwt] LOGIN_SUCCESS', action.payload);
      c.set('jwt', action.payload, { path: '/' });
      dispatch(actions.thisUserUpdate());
      done();
    }
  }
);

export const thisUserUpdateLogic = createLogic(
  {
    type: actionTypes.THIS_USER_UPDATE,
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'THIS_USER_UPDATE' ) {
        Debug.log('[action:validate:allow] THIS_USER_UPDATE', action);
        allow(action);
      } else {
        reject();
      }
    },
    process: ({action}, dispatch, done) => {
      const c = new Cookies();
      const jwt = c.get('jwt');
      Debug.log('[action:process:remoteAPI] THIS_USER_UPDATE', jwt);
      API.Axios('POST', '/graphql', API.generateThisUserQuery(), jwt)
      .then( data => {
        Debug.log('[THIS_USER_UPDATE:process:success]', data);
        dispatch(actions.thisUserUpdateSuccess(data.thisUser));
      })
      .catch( error => {
        Debug.log(error);
        dispatch(actions.thisUserUpdateSuccess(error.message));
      })
      .then( () => {
        done();
      });  
    }
  }
);

export const activateLogic = createLogic(
  {
    type: actionTypes.ACTIVATE,
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'ACTIVATE' && action.payload ) {
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    },
    process: ({ action, getState }, dispatch, done) => {
      const state = getState();
      Debug.log('[action:process:remoteAPI] ACTIVATE', action);
      API.Axios('POST', '/graphql', API.generateActivateQuery(action.payload), state.Login.jwt)
      .then ( data => {
        Debug.log('[action:process:apiSuccess] ACTIVATE', data);
        dispatch(actions.activateSuccess(data.activateUser.jwtToken));
      })
      .catch( error=> {
        Debug.log('[action:process:apiError] ACTIVATE', error);
        dispatch(actions.activateFail('Bad code or not logged in.'));
      })
      .then( () => {
        done();
      });  
    }
  }
);

export const activateSuccessLogic = createLogic(
  {
    type: actionTypes.ACTIVATE_SUCCESS,
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'ACTIVATE_SUCCESS' && action.payload ) {
        Debug.log('[action:validate:allow] ACTIVATESUCCESS', action);
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    },
    process: ({ action, getState }, dispatch, done) => {
      const c = new Cookies();
      c.set('jwt', action.payload, { path: '/' });
    }
  }
);

export const activateFailLogic = createLogic(
  {
    type: actionTypes.ACTIVATE_FAIL,
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'ACTIVATE_FAIL' && action.payload ) {
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    }
  }
);

export const logOutLogic = createLogic(
  {
    type: actionTypes.LOGOUT,
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'LOGOUT' ) {
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    },
    process: ({ action, getState }, dispatch, done) => {
      const c = new Cookies();
      c.remove('jwt', { path: '/' });
      done();
    }
  }
);


export default [
 loginLogic,
 loginSuccessLogic,
 registerLogic,
 registerSuccessLogic,
 activateLogic,
 activateSuccessLogic,
 activateFailLogic,
 thisUserUpdateLogic,
 logOutLogic
];