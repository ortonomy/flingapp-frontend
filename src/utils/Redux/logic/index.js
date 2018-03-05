// import logic files here
import { default as loggerLogic } from './logger';
import { logic as loginLogic } from '../../../containers/Login';
import { logic as freelancerLogic } from '../../../containers/Freelancer';

// export the array of logics here. actions will be passed to each in order
export default [
  ...loggerLogic,
  ...loginLogic,
  ...freelancerLogic
];
