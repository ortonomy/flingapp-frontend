// import logic files here
import { default as loggerLogic } from './logger';
import { logic as appLogic } from '../containers/App/index';

// export the array of logics here. actions will be passed to each in order
export default [
  ...loggerLogic,
  ...appLogic
];