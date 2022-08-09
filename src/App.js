// ========= Firebase =========
// import React from 'react';
// import Navigator from './Firebase/routes/Navigator';
// import {Provider} from 'react-redux';
// import {store} from './Firebase/redux/store';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <Navigator />
//     </Provider>
//   );
// }

// ========= Excercise =========
// import React from 'react';
// import Navigator from './Excercise/routes/Navigator';
// import {store} from './Excercise/redux/store';
// import {Provider} from 'react-redux';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <Navigator />
//     </Provider>
//   );
// }

// ========= Firebase =========
// import React from 'react';
// import Navigator from './Libraries/routes/Navigator';
// import {Provider} from 'react-redux';
// import {store} from './Libraries/redux/store';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <Navigator />
//     </Provider>
//   );
// }

// ========= RTK Query =========
import React from 'react';
import Navigator from './RTKQueryRedux/routes/Navigator';
import {Provider} from 'react-redux';
import {store} from './RTKQueryRedux/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
