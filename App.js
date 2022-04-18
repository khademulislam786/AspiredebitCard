import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigator/index';
import configureStore from './src/redux/reduxStore';

const store = configureStore();

const App = () => {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App