// library dependencies
import { createLogic } from 'redux-logic';
//import { Cookies } from 'react-cookie';

//custom actions
import { actionTypes, actions } from './actions';
import { actions as loginActions } from '../Login/actions';

// custom utils
import API from '../../utils/Api';
import Debug from '../../utils/Debug';

export const orgSearchLogic = createLogic(
  {
    type: actionTypes.ORG_SEARCH,
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'ORG_SEARCH' && action.payload ) {
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    },
    process: ({ action, getState }, dispatch, done) => {
      const state = getState();
      Debug.log('[action:process:remoteAPI] ORG_SEARCH', action);
      API.Axios('POST', '/graphql', API.generateOrgSearchQuery(action.payload), state.Login.jwt)
      .then ( data => {
        Debug.log('[action:process:apiSuccess] ORG_SEARCH', data);
        dispatch(actions.orgSearchSuccess(data.organizationByOrgName));
      })
      .catch( err => {
        Debug.log('[action:process:apiError] ORG_SEARCH', err);
        if ( /.?denied.?/.test(err) ) {
          dispatch(actions.orgSearchFail('Permission Denied. Not logged in.'));
          return;
        }
        dispatch(actions.orgSearchFail('Unknown error'));
      })
      .then( () => {
        done();
      });  
    }
  }
);

export const orgCreateLogic = createLogic(
  {
    type: actionTypes.ORG_CREATE,
    validate: ({ action }, allow, reject ) => {
      if ( action.type === 'ORG_CREATE' ) {
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    },
    process: ({ getState, action }, dispatch, done ) => {
      const state = getState();
      Debug.log('[action:process:remoteAPI] ORG_CREATE', action);
      API.Axios('POST', '/graphql', API.generateCreateOrgMutation({user: state.Login.user.userAccId, name: state.Org.enrolment.searchTerm}), state.Login.jwt)
      .then ( data => (dispatch(actions.orgCreateSuccess(data.createOrganization.organization))))
      .catch ( err => (dispatch(actions.orgCreateFail(err.message))))
      .then( () => ( done()));
    }
  }
)

export const orgCreateSuccessLogic = createLogic(
  {
    type: actionTypes.ORG_CREATE_SUCCESS,
    validate:({ action }, allow, reject ) => {
      if ( action.type === 'ORG_CREATE_SUCCESS' && action.payload ) {
        allow(action);
      } else {
        reject();
      }
    },
    process: ({ getState, action }, dispatch, done ) => {
      dispatch(loginActions.addUserOrg(action.payload.orgId));
      done();
    }
  }
)

export const orgCreateFailLogic = createLogic(
  {
    type: actionTypes.ORG_CREATE_FAIL,
    validate:({ action }, allow, reject ) => {
      if ( action.type === 'ORG_CREATE_FAIL' && action.payload ) {
        allow(action);
      } else {
        reject();
      }
    },
    process: ({ getState, action }, dispatch, done ) => {
    }
  }
)

export default [
  orgSearchLogic,
  orgCreateLogic,
  orgCreateSuccessLogic,
  orgCreateFailLogic
];