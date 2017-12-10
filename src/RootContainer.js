// basic react
import React from 'react';

// state management utilities
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogicMiddleware } from 'redux-logic';

// state management user functions
import { default as rootLogic } from './logic'
import { default as rootReducer } from './reducers';

// components
import { App } from './containers/App';


// configure injected dependencies for redux-logic
const deps = {
  createAction: function(type, payload) {
    return {
      type,
      payload: payload || {}
    }
  }
};

// configure initial state
const initialState = {};

// define store configure for middleware
const configureStore = () => {
  const logicMiddleware = createLogicMiddleware(rootLogic, deps); // create logic middleware
  const middleware = applyMiddleware(logicMiddleware); // apply middleware to redux dispatch
  return createStore(rootReducer, initialState, middleware); // create the store
}
const store = configureStore(initialState); // call the store configuration


const RootContainer = (props) => {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  );
}

export default RootContainer;
