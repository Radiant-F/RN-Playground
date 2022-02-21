// import React from 'react';
// import Navigator from './Animated/route/Navigator';
// import {store} from './Animated/redux/Store';
// import {Provider} from 'react-redux';

// function App() {
//   return (
//     <Provider store={store}>
//       <Navigator />
//     </Provider>
//   );
// }

// export default App;

import React from 'react';
import Navigator from './Thunk/route/Navigator';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './Thunk/redux/reducers';
const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
