// redux
import { combineReducers } from 'redux'; // need redux functionality 

// import all your app reducers here
import { reducer as LoginReducer } from '../../../containers/Login';

export default combineReducers({
  'Login': LoginReducer
}); // add to spec object 