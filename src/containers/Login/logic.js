import { createLogic } from 'redux-logic';
import { actionTypes, actions } from './actions';

export const loginLogic = createLogic({
  type: actionTypes.LOGIN,
  /* let's prevent empty requests */
  validate: ({ getState, action }, allow, reject) => {
    if ( action.type === 'LOGIN' ) {
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
    // dispatch(actions.login(action.payload));
    done();
  }
});

export default [
 loginLogic
];