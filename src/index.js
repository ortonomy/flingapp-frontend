// create-react-app default
import registerServiceWorker from './registerServiceWorker';

// basic react
import React from 'react';
import ReactDOM from 'react-dom';

// custom components
import RootContainer from './RootContainer';

// global styles
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  (<RootContainer />),
  document.getElementById('root')
);

registerServiceWorker();
