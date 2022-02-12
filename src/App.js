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

export default function App() {
  return <Navigator />;
}
