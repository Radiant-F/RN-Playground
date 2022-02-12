import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {CollapsibleHeader, Dashboard, StickyHeader} from './routes';
import Header from '../components/screen/Header';

const Stack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Dashboard} name="Dashboard" />
        <Stack.Screen component={StickyHeader} name="StickyHeader" />
        <Stack.Screen component={CollapsibleHeader} name="CollapsibleHeader" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
