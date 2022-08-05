import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Auth, Dashboard} from '../screens/exports';

const Stack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Auth} name="Auth" />
        <Stack.Screen component={Dashboard} name="Dashboard" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
