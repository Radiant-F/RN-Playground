import React from 'react';
import Navigator from './MessAround/route/Navigator';
import {store} from './MessAround/redux/Store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
