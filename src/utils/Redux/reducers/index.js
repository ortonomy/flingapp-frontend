// redux
import { combineReducers } from 'redux'; // need redux functionality 

// import all your app reducers here
import { reducer as LoginReducer } from '../../../containers/Login';
import { reducer as OrgReducer } from '../../../containers/OrgEnrolment';

export default combineReducers({
  'Login': LoginReducer,
  'Org': OrgReducer
}); // add to spec object 