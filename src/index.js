// create-react-app default
import registerServiceWorker from './registerServiceWorker';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// library dependencies
import * as Redux from './utils/Redux';

// custom components
import RootContainer from './RootContainer';

// global styles
import 'sanitize.css';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

const initialRender = async () => {
  const newStore = await Redux.configureStore();
  ReactDOM.render(
    (<RootContainer store={newStore} />),
    document.getElementById('root')
  );

  registerServiceWorker();
}

initialRender();





