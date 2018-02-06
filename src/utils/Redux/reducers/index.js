// redux
import { combineReducers } from 'redux'; // need redux functionality

// import all your app reducers here
import { reducer as LoginReducer } from '../../../containers/Login';
import { reducer as FreelancerReducer } from '../../../containers/Freelancer';

export default combineReducers({
  'Login': LoginReducer,
  'Freelancer': FreelancerReducer
}); // add to spec object
