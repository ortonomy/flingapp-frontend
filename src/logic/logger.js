import { createLogic } from 'redux-logic';

export const loggerLogic = createLogic({
  type: '*', // take all actions
  validate: ({ getState, action }, allow, reject) => {
    console.time(action.type);
    console.log('Action triggered: ', action.type); // log actions type
    allow(action); // allow to pass to reducer
  },
  process: ({ action }, done, dispatch) => {
    console.log('Action ended: ', action.type);
    console.timeEnd(action.type);
    dispatch();
    done();
  }
});

export default [
  loggerLogic
];