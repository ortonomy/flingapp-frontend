// redux
import { combineReducers } from 'redux'; // need redux functionality 

// import all your app reducers here
import  { reducer as AppReducer } from '../containers/App';

export default combineReducers({
  'App': AppReducer
}); // add to spec object 