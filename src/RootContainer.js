// basic react
import React from 'react';

// state management utilities
import { Provider } from 'react-redux';

// library dependencies
import { CookiesProvider } from 'react-cookie';

// components
import { App } from './containers/App';

//debug
import Debug from './utils/Debug';

const RootContainer = (props) => {
  const { store } = props;
  Debug.log('[render] of <RootContainer>: ', store.getState());
  return (
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
  );
}

export default RootContainer;