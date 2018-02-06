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

//initial state is not needed here, done inside store config
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
  }
};

const checkLogin = async () => {
  const c = new Cookies();
  if ( c.get('jwt') ) {
    const jwt = c.get('jwt');
      if ( jwt ) {
        const userDetails = await API.isLoggedIn(jwt);
        return userDetails ? { userDetails: userDetails, jwt: jwt } : { userDetails: null, jwt: null };
      }
  }
  return { userDetails: null, jwt: null };
}

const hydrateState = async () => {
  const user = await checkLogin();
  Debug.log('API.hydrateState() result: ', user ? user : 'NOT LOGGGED IN');
  if ( user ) {
    return {
      Login: {
        user: {
          ...user.userDetails
        },
        loggedIn: true,
        activated: user.userDetails.userEmailConfirmed,
        jwt: user.jwt
      }
    }
  }
  return {
    Login: {
      loggedIn: false,
      activated: false
    }
  };
}


// define store configure for middleware
export const configureStore = async () => {
  const hydratedState = await hydrateState();
  const mergedState = {
    ...initialState,
    Login: {
      ...initialState.Login,
      ...hydratedState.Login
    }
  }
  const logicMiddleware = createLogicMiddleware(rootLogic, deps); // create logic middleware
  const middleware = applyMiddleware(logicMiddleware); // apply middleware to redux dispatch
  return createStore(rootReducer, mergedState, process.env.NODE_ENV === 'development' ? composeWithDevTools(middleware): middleware); // create the store
}


