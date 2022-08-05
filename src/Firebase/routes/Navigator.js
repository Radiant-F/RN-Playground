import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Authentication,
  CloudFirestore,
  Dashboard,
  DrawerContent,
  Splash,
} from '../screens';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CloudFirestore">
        <Stack.Screen
          component={DrawerNavigator}
          name="MainApp"
          options={{headerShown: false}}
        />
        <Stack.Screen component={Splash} name="Splash" />
        <Stack.Screen component={Dashboard} name="Dashboard" />
        <Stack.Screen component={Authentication} name="Auth" />
        <Stack.Screen component={CloudFirestore} name="CloudFirestore" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={Dashboard} name="DasboardDrawer" />
    </Drawer.Navigator>
  );
}
