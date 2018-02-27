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

//// generateRequestAccessToOrgMutation

export const orgRequestAccessLogic = createLogic(
  {
    type: actionTypes.ORG_REQUEST_ACCESS,
    validate: ({ action }, allow, reject ) => {
      if ( action.type === 'ORG_REQUEST_ACCESS' && action.payload) {
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    },
    process: ({ getState, action }, dispatch, done ) => {
      const state = getState();
      Debug.log('[action:process:remoteAPI] ORG_REQUEST_ACCESS', action);
      API.Axios('POST', '/orgaccess', API.generateRequestAccessToOrgMutation(action.payload), state.Login.jwt)
      .then ( data => ( dispatch(actions.orgRequestAccessSuccess(data.requestAccessToOrg.accessRequest) ) ) )
      .catch ( err => ( dispatch(actions.orgRequestAccessFail(err.message) ) ) )
      .then( () => ( done()));
    }
  }
)

export const orgRequestAccessSuccessLogic = createLogic(
  {
    type: actionTypes.ORG_REQUEST_ACCESS_SUCCESS,
    validate:({ action }, allow, reject ) => {
      if ( action.type === 'ORG_REQUEST_ACCESS_SUCCESS' && action.payload ) {
        allow(action);
      } else {
        reject();
      }
    }
  }
)

export const orgRequestAccessFailLogic = createLogic(
  {
    type: actionTypes.ORG_REQUEST_ACCESS_FAIL,
    validate:({ action }, allow, reject ) => {
      if ( action.type === 'ORG_REQUEST_ACCESS_FAIL' && action.payload ) {
        allow(action);
      } else {
        reject();
      }
    }
  }
)

export const validateUserOrgRequestLogic = createLogic(
  {
    type: actionTypes.VALIDATE_USER_ORG_ACCESS,
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'VALIDATE_USER_ORG_ACCESS' && action.payload ) {
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    },
    process: ({ action, getState }, dispatch, done) => {
      const { Login } = (getState());
      API.Axios('POST', '/graphql', API.generateValidateUserOrgAccessRequestMutation(action.payload), Login.jwt )
      .then ( data => {
        if ( !data.validateOrgAccess.simpleAccessRequest ) {
          throw new Error('Request already processed, request expired, or bad code');
        }
        dispatch(actions.validateUserOrgAccessSuccess(data.validateOrgAccess));
      })
      .catch( err => ( dispatch(actions.validateUserOrgAccessFail(err.message)) ) )
      .then ( () => ( done() ) );
    }
  }
)

export const validateUserOrgRequestSuccessLogic = createLogic(
  {
    type: actionTypes.VALIDATE_USER_ORG_ACCESS_SUCCESS,
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'VALIDATE_USER_ORG_ACCESS_SUCCESS' && action.payload ) {
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    }
  }
)

export const validateUserOrgRequestFailLogic = createLogic(
  {
    type: actionTypes.VALIDATE_USER_ORG_ACCESS_FAIL,
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'VALIDATE_USER_ORG_ACCESS_FAIL' && action.payload ) {
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    }
  }
)


export default [
  orgSearchLogic,
  orgCreateLogic,
  orgCreateSuccessLogic,
  orgCreateFailLogic,
  orgRequestAccessLogic,
  orgRequestAccessSuccessLogic,
  orgRequestAccessFailLogic,
  validateUserOrgRequestLogic,
  validateUserOrgRequestSuccessLogic,
  validateUserOrgRequestFailLogic
];