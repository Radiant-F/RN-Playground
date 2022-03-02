// ==== REDUX ====
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

// ==== REDUX THUNK ====
// import React from 'react';
// import Navigator from './Thunk/route/Navigator';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './Thunk/redux/reducers';
// const store = createStore(reducers, compose(applyMiddleware(thunk)));

// export default function App() {
//   return (
//     <Provider store={store}>
//       <Navigator />
//     </Provider>
//   );
// }

// ==== i18next ====
import React from 'react';
import Navigator from './i18n/route/Navigator';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './i18n/redux/reducers';
const store = createStore(reducers, compose(applyMiddleware(thunk)));
import './i18n/utils/constants/IMLocalize';
export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
