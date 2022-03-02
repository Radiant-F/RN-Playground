import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Auth} from '../screens/exports';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={BottomTabs} name="BottomTabs" />
        <Stack.Screen component={Auth} name="Auth" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
