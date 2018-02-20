// library dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { Cookies } from 'react-cookie';

// user library dependencies
import { default as rootLogic } from './logic'
import { default as rootReducer } from './reducers';
import API from '../Api';
import Debug from '../Debug';

// configure injected dependencies for redux-logic
const deps = { 
  createAction: function(type, payload) {
    return {
      type,
      payload: payload || {}
    }
  }
};

//initial state setup (may need to move this to external state model file)
const initialState = {
  Login: {
    loggedIn: false,
    loggingIn: false,
    activated: false,
    activating: false,
    registering: false,
    lastLoginError: null,
    lastUserError: null,
    lastRegisterError: null,
    lastActivationError: null,
    jwt: null,
    user: null
  },
  Org: {
    userOrg: null,
    lastOrgError: null,
    enrolment: {
      searching: false,
      searched: false,
      found: false,
      searchTerm: null,
      currentOrg: null,
      created: false,
      accessRequested: false
    }
  }
};

const checkLogin = async () => {
  const c = new Cookies();
  if ( c.get('jwt') ) {
    const jwt = c.get('jwt');
    Debug.log('[checkLogin:getCookie] HYDRATESTATE', jwt);
    if ( jwt ) {
      const userDetails = await API.isLoggedIn(jwt);
      return userDetails ? { userDetails: userDetails, jwt: jwt } : { userDetails: null, jwt: null };
    }
  }
  return { userDetails: null, jwt: null };
}

const checkOrg = async (id) => {
  const c = new Cookies();
  if ( ! c.get('jwt') ) {
    return null;
  }

  return await API.hasOrgAccessRequestPending(c.get('jwt'), id);
}

const hydrateState = async () => {
  const user = await checkLogin();
  const userDetails = user.userDetails === null ? null : user.userDetails.userAccId !== null ? user.userDetails : null; // this helps check to see if expired or invalid JWT is being used
  const org = userDetails && !userDetails.userOrg ? await checkOrg(userDetails.userAccId) : null;
  Debug.log('API.hydrateState() result: ', userDetails !== null ? userDetails : 'NOT LOGGGED IN');
  let partialState = { Login: null, Org: null };


  if ( !userDetails ) {
    return partialState;
  }

  partialState.Login = {
    user: {
      ...userDetails
    },
    loggedIn: true,
    activated: userDetails.userEmailConfirmed,
    jwt: user.jwt
  };

  if ( !org ) {
    return partialState;
  }

  partialState.Org = {
    enrolment: {
      accessRequested: true
    }
  }

  return partialState;
}


// define store configure for middleware
export const configureStore = async () => {
  const hydratedState = await hydrateState();
  const mergedState = {
    ...initialState,
    Login: {
      ...initialState.Login,
      ...hydratedState.Login
    },
    Org: {
      ...initialState.Org,
      ...hydratedState.Org
    }
  }
  const logicMiddleware = createLogicMiddleware(rootLogic, deps); // create logic middleware
  const middleware = applyMiddleware(logicMiddleware); // apply middleware to redux dispatch
  return createStore(rootReducer, mergedState, process.env.NODE_ENV === 'development' ? composeWithDevTools(middleware): middleware); // create the store
}


