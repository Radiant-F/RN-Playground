// ========= Template =========
// import React from 'react';
// import {
//   Navigator,
//   BottomNavigator,
//   DrawerNavigator,
// } from './@Template/routes/Navigator';
// import {Provider} from 'react-redux';
// import {store} from './@Template/redux/store';
// import {NavigationContainer} from '@react-navigation/native';
// import {SafeAreaProvider} from 'react-native-safe-area-context';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <SafeAreaProvider>
//         <NavigationContainer>
//           <DrawerNavigator />
//         </NavigationContainer>
//       </SafeAreaProvider>
//     </Provider>
//   );
// }

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
// import {NavigationContainer} from '@react-navigation/native';
// import React from 'react';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {StackScreen} from './Excercise/routes/Navigator';
// import {Provider} from 'react-redux';
// import {store} from './Excercise/redux/store';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <SafeAreaProvider>
//         <NavigationContainer>
//           <StackScreen />
//         </NavigationContainer>
//       </SafeAreaProvider>
//     </Provider>
//   );
// }

// ========= Firebase =========
import React from 'react';
import Navigator from './Libraries/routes/Navigator';
import {Provider} from 'react-redux';
import {store} from './Libraries/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

// ========= Libraries =========
// import React from 'react';
// import Navigator from './Libraries/routes/Navigator';
// import {Provider} from 'react-redux';
// import {store} from './Libraries/redux/store';
// import {SafeAreaProvider} from 'react-native-safe-area-context';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <SafeAreaProvider>
//         <Navigator />
//       </SafeAreaProvider>
//     </Provider>
//   );
// }

// ========= RTK Query =========
// import React from 'react';
// import Navigator from './RTKQuery/routes/Navigator';
// import {Provider} from 'react-redux';
// import {store} from './RTKQuery/redux/store';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <Navigator />
//     </Provider>
//   );
// }

// ========= React Native Bootsplash =========
// import React, {useEffect} from 'react';
// import {
//   Navigator,
//   BottomNavigator,
//   DrawerNavigator,
// } from './Bootsplash/routes/Navigator';
// import {Provider} from 'react-redux';
// import {store} from './Bootsplash/redux/store';
// import {NavigationContainer} from '@react-navigation/native';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {Text, View} from 'react-native';
// import RNBootSplash from 'react-native-bootsplash';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <SafeAreaProvider>
//         <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
//           <DrawerNavigator />
//         </NavigationContainer>
//       </SafeAreaProvider>
//     </Provider>
//   );
// }

// export default function App() {
//   useEffect(() => {
//     const init = async () => {
//       console.log('the app is running 😲');
//       // …do multiple sync or async tasks
//     };

//     init().finally(async () => {
//       await RNBootSplash.hide({fade: true});
//       console.log('Bootsplash has been hidden successfully');
//     });
//   }, []);
//   return (
//     <View>
//       <Text>ping?</Text>
//     </View>
//   );
// }
