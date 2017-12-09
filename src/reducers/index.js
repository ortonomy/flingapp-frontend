// redux
import { combineReducers } from 'redux'; // need redux functionality 

// import all your app reducers here
import { reducer as AppReducer } from '../containers/App';
import { reducer as LoginReducer } from '../containers/Login';

export default combineReducers({
  'App': AppReducer,
  'Login': LoginReducer
}); // add to spec object 