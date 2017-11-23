import { createLogic } from 'redux-logic';
import { actionTypes, actions } from './actions';

export const appLogic = createLogic({
  type: actionTypes.APP_UPDATE,
  debounce: 500, /* ms */
  latest: true,  /* take latest only */
  /* let's prevent empty requests */
  validate: ({ getState, action }, allow, reject) => {
    if ( action.payload || action.type === 'APP_RESET_STATE' ) {
      allow(action);
    } else {  /* empty request, silently reject */
      reject();
    }
  },
  process: ({ getState, action }, dispatch, done) => {
    // Promise.resolve(action.payload)
    // .then ( resp => resp.data )
    // .then ( data => dispatch(actions.appUpdateSuccess(data))
    // .catch ( err => {
    //   console.error(err);
    //   dispatch(actions.appUpdateFail(err));
    // })
    // .then ( () => {
    //   done() 
    // })
    dispatch(actions.appUpdateSuccess('test update'));
    done();
  }
});

export default [
  appLogic
];