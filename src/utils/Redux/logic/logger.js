import { createLogic } from 'redux-logic';
import Debug from '../../Debug';

export const loggerLogic = createLogic({
  type: '*', // take all actions
  validate: ({ getState, action }, allow, reject) => {
    Debug.time(action.type);
    Debug.log('[Action triggered] ', action.type); // log actions type
    Debug.log('[Action payload] ', action.payload); // log actions type
    Debug.log('[Current state]', getState() );
    allow(action); // allow to pass to reducer
  },
  process: ({ action, getState }, done, dispatch) => {
    Debug.log('[Action ended] ', action.type);
    Debug.log('[Final state] ', getState() );
    Debug.timeEnd(action.type);
    dispatch();
    done();
  }
});

export default [
  loggerLogic
];