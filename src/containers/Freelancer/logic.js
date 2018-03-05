// library dependencies
import { createLogic } from 'redux-logic';

// custom actions
import { actionTypes, actions } from './actions';

// custom utils
import API from '../../utils/Api';
import Debug from '../../utils/Debug';


export const freelancerQueryLogic = createLogic(
  {
    type: actionTypes.FREELANCER_QUERY,
    /* let's prevent empty requests */
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'FREELANCER_QUERY' && action.payload) {
        Debug.log(['[action:validate:allow] FREELANCER_QUERY'], action.payload)
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    },
    process: ({ action, getState }, dispatch, done) => {
      const state = getState();
      Debug.log('[calling] FREELANCER_QUERY', action.payload);
      API.Axios('POST', '/graphql', API.generateFreelancerInfoQuery(action.payload), state.Login.jwt)
      .then ( data => {
        if ( data ) {
          Debug.log('[action:process:freelancer_info] FREELANCER_QUERY', data);
          dispatch(actions.freelancerInfo(data.allFreelancers.edges[0]));
        } else {
          throw(new Error('Request failed.'));
        }
      })
      .catch( error => {
        throw(new Error(error));
      })
      .then ( () => {
        done();
      });
    }
  }
);

export const freelancerInfoLogic = createLogic(
  {
    type: actionTypes.FREELANCER_INFO,
    /* let's prevent empty requests */
    validate: ({ action }, allow, reject) => {
      if ( action.type === 'FREELANCER_INFO' && action.payload) {
        Debug.log(['[action:validate:allow] FREELANCER_INFO'], action.payload)
        allow(action);
      } else {  /* empty request, silently reject */
        reject();
      }
    }
  }
);

export default [
 freelancerQueryLogic,
 freelancerInfoLogic
];
