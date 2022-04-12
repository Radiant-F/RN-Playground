import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  Buttons,
  CollapsibleHeader,
  Dashboard,
  FormInput,
  ScrollAnimation,
  SkeletonLoading,
  StickyHeader,
} from './routes';

const Stack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Dashboard} name="Dashboard" />
        <Stack.Screen component={StickyHeader} name="StickyHeader" />
        <Stack.Screen component={CollapsibleHeader} name="CollapsibleHeader" />
        <Stack.Screen component={SkeletonLoading} name="SkeletonLoading" />
        <Stack.Screen component={Buttons} name="Buttons" />
        <Stack.Screen component={ScrollAnimation} name="ScrollAnimation" />
        <Stack.Screen component={FormInput} name="FormInput" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
