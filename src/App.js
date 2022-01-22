// import React from 'react';
// import Navigator from './MessAround/route/Navigator';
// import {store} from './MessAround/redux/Store';
// import {Provider} from 'react-redux';

// function App() {
//   return (
//     <Provider store={store}>
//       <Navigator />
//     </Provider>
//   );
// }

// export default App;

// Redux Thunk
import React from 'react';
import Navigator from './ReduxThunk/route/Navigator';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './ReduxThunk/redux/reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
